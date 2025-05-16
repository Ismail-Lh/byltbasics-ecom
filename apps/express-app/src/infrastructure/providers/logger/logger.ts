import { injectable } from "inversify";
import winston from "winston";

import type { ILogger } from "@/application/providers";

import {
  DEFAULT_COMBINED_LOG_PATH,
  DEFAULT_ERROR_LOG_PATH,
  DEFAULT_LOG_LEVEL,
  DEFAULT_TIMESTAMP_FORMAT,
  LOG_COLORS,
  LOG_LEVELS,
} from "./constants";

/**
 * Logger provides a centralized logging solution for the application
 * using Winston as the underlying logging library.
 *
 * Features:
 * - Multiple log levels (error, warn, info, http, debug)
 * - Console and file transports
 * - JSON formatting with timestamps
 * - Color-coded console output
 * - Metadata support for contextual logging
 *
 * @implements {ILogger}
 */
@injectable()
export class Logger implements ILogger {
  private logger: winston.Logger;

  /**
   * Initializes the Logger with default configuration.
   * Sets up Winston with console and file transports, configures log formats,
   * and establishes color coding for different log levels.
   */
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

  /**
   * Logs an error message.
   * Use this method for critical failures and errors that need immediate attention.
   *
   * @param {string} message - The error message to log
   * @param {any} [meta] - Optional metadata to provide additional context about the error
   */
  public error = (message: string, meta?: any) => {
    this.logger.error(message, meta);
  };

  /**
   * Logs a warning message.
   * Use this method for potentially harmful situations or unexpected behavior
   * that doesn't cause the application to fail.
   *
   * @param {string} message - The warning message to log
   * @param {any} [meta] - Optional metadata to provide additional context
   */
  public warn = (message: string, meta?: any) => {
    this.logger.warn(message, meta);
  };

  /**
   * Logs an informational message.
   * Use this method for general information about application progress and milestones.
   *
   * @param {string} message - The information message to log
   * @param {any} [meta] - Optional metadata to provide additional context
   */
  public info = (message: string, meta?: any) => {
    this.logger.info(message, meta);
  };

  /**
   * Logs an HTTP request-related message.
   * Use this method to log information about incoming requests and outgoing responses.
   *
   * @param {string} message - The HTTP-related message to log
   * @param {any} [meta] - Optional metadata (e.g. request details, response status)
   */
  public http = (message: string, meta?: any) => {
    this.logger.http(message, meta);
  };

  /**
   * Logs a debug message.
   * Use this method for detailed troubleshooting information during development.
   * Debug messages are typically only enabled during development or troubleshooting.
   *
   * @param {string} message - The debug message to log
   * @param {any} [meta] - Optional metadata to provide additional context
   */
  public debug = (message: string, meta?: any) => {
    this.logger.debug(message, meta);
  };

  /**
   * Returns the underlying Winston logger instance.
   * This method provides access to the raw Winston logger for advanced use cases
   * where the standard methods are not sufficient.
   *
   * @returns {winston.Logger} The Winston logger instance
   */
  public getLogger(): winston.Logger {
    return this.logger;
  }

  /**
   * Adds a new transport to the logger.
   * This method allows extending the logger with additional outputs,
   * such as third-party logging services or custom transports.
   *
   * @param {winston.transport} transport - The transport to add to the logger
   */
  public addTransport(transport: winston.transport): void {
    this.logger.add(transport);
  }

  /**
   * Removes all transports from the logger.
   * This method is useful when reconfiguring the logger or when
   * you need to temporarily disable all logging.
   */
  public clearTransports(): void {
    this.logger.clear();
  }
}
