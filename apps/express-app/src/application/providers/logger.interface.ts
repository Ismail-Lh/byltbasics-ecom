export interface LogMethod {
  (message: string, meta?: any): void;
}

export interface ILogger {
  error: LogMethod;
  warn: LogMethod;
  info: LogMethod;
  http: LogMethod;
  debug: LogMethod;
}
