import { injectable } from "inversify";
import winston from "winston";

import type { ILoggerService, LogMethod } from "./logger.types";

import {
  DEFAULT_COMBINED_LOG_PATH,
  DEFAULT_ERROR_LOG_PATH,
  DEFAULT_LOG_LEVEL,
  DEFAULT_TIMESTAMP_FORMAT,
  LOG_COLORS,
  LOG_LEVELS,
} from "./logger.constants";

@injectable()
export class LoggerService implements ILoggerService {
  private logger: winston.Logger;

  constructor() {
    // Add colors to winston
    winston.addColors(LOG_COLORS);

    // Create formats
    const consoleFormat = winston.format.combine(
      winston.format.json(),
      winston.format.timestamp({ format: DEFAULT_TIMESTAMP_FORMAT }),
      winston.format.colorize({ all: true }),
      winston.format.metadata({
        fillExcept: ["message", "level", "timestamp", "metadata"],
      }),
      winston.format.printf((info) => {
        // console.log(info);
        let logMessage = `[${info.timestamp}] [${info.level}]: ${info.message}`;

        if (info.metadata && Object.keys(info.metadata).length > 0) {
          // Add metadata if it exists
          // Convert metadata to a formatted string
          const metaString = JSON.stringify(info.metadata, null, 2);
          logMessage += `\n${metaString}`;
        }

        return logMessage;
      }),
    );

    const fileFormat = winston.format.combine(
      winston.format.timestamp({ format: DEFAULT_TIMESTAMP_FORMAT }),
      winston.format.metadata({
        fillExcept: ["message", "level", "timestamp", "metadata"],
      }),
      winston.format.json(),
      winston.format.printf((info) => {
        let logMessage = `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`;

        if (info.metadata && Object.keys(info.metadata).length > 0) {
          // Add metadata if it exists
          // Convert metadata to a formatted string
          const metaString = JSON.stringify(info.metadata, null, 2);
          logMessage += `\n${metaString}`;
        }

        return logMessage;
      }),
    );

    // Create logger instance
    this.logger = winston.createLogger({
      level: DEFAULT_LOG_LEVEL,
      levels: LOG_LEVELS,
      transports: [
        new winston.transports.Console({
          format: consoleFormat,
        }),
        new winston.transports.File({
          filename: DEFAULT_ERROR_LOG_PATH,
          level: "error",
          format: fileFormat,
        }),
        new winston.transports.File({
          filename: DEFAULT_COMBINED_LOG_PATH,
          format: fileFormat,
        }),
      ],
    });
  }

  // Log methods
  public error: LogMethod = (message: string, meta?: any) => {
    this.logger.error(message, meta);
  };

  public warn: LogMethod = (message: string, meta?: any) => {
    this.logger.warn(message, meta);
  };

  public info: LogMethod = (message: string, meta?: any) => {
    this.logger.info(message, meta);
  };

  public http: LogMethod = (message: string, meta?: any) => {
    this.logger.http(message, meta);
  };

  public debug: LogMethod = (message: string, meta?: any) => {
    this.logger.debug(message, meta);
  };

  // Utility methods
  public getLogger(): winston.Logger {
    return this.logger;
  }

  public addTransport(transport: winston.transport): void {
    this.logger.add(transport);
  }

  public clearTransports(): void {
    this.logger.clear();
  }
}
