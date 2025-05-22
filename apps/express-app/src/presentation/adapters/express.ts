import type { IHttpController } from "../controllers/controller.interface";
import type { IHttpRequest } from "../types";

/**
 * Adapts Express request to the application's request format and calls the provided controller.
 *
 * @async
 * @param {Request} request - The Express request object.
 * @param {IHttpController} controller - The controller to handle the request.
 * @returns {Promise<IHttpResponse>} The response from the controller.
 */
export async function expressAdapter<B, R, Q, P>(
  request: IHttpRequest<B, Q, P>,
  controller: IHttpController<B, R, Q, P>,
): Promise<R> {
  const response = await controller.handle(request);
  return response;
}
