/**
 * BaseError is a custom error class that extends the built-in Error class.
 * It includes additional properties such as httpCode and isOperational to provide
 * more context about the error.
 *
 * @class
 * @extends {Error}
 */
export class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: number;
  public readonly isOperational: boolean;
  public readonly metadata: Record<string, unknown>;

  constructor(
    name: string,
    httpCode: number,
    description: string,
    isOperational: boolean,
    metadata: Record<string, unknown> = {},
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.metadata = metadata;

    Error.captureStackTrace(this);
  }
}
