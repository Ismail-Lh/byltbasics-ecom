export const DEFAULT_LOG_LEVEL = "debug";
export const DEFAULT_ERROR_LOG_PATH = "logs/error.log";
export const DEFAULT_COMBINED_LOG_PATH = "logs/all.log";
export const DEFAULT_TIMESTAMP_FORMAT = "YYYY-MM-DD HH:mm:ss";

export const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
} as const;

export const LOG_COLORS = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
} as const;
