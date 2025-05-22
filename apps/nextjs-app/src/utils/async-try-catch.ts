interface Success<T> {
  data: T;
  error: null;
}

interface Failure<E> {
  data: null;
  error: E;
}

type Result<T, E = Error> = Success<T> | Failure<E>;

/**
 * A utility function to handle asynchronous operations with a try-catch block.
 * It wraps a promise and returns a result object containing either the resolved data
 * or the caught error.
 *
 * @template T - The type of the resolved value of the promise.
 * @template E - The type of the error, defaults to `Error`.
 *
 * @param promise - The promise to be executed.
 * @returns A promise that resolves to an object containing:
 * - `data`: The resolved value of the promise, or `null` if an error occurred.
 * - `error`: The caught error, or `null` if the promise resolved successfully.
 */
export async function asyncTryCatch<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return { data, error: null };
  }
  catch (error) {
    return { data: null, error: error as E };
  }
}
