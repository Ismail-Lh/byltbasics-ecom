import type { IHttpController } from "../http/controllers/controller.interface";
import type { IHttpRequest, IHttpResponse } from "../http/helpers/interfaces";

/**
 * Adapts Express request to the application's request format and calls the provided controller.
 *
 * @async
 * @param {Request} request - The Express request object.
 * @param {IHttpController} apiRoute - The controller to handle the request.
 * @returns {Promise<IHttpResponse>} The response from the controller.
 */
export async function expressAdapter<B, R, Q, P>(
  request: IHttpRequest<B, Q, P>,
  apiRoute: IHttpController<B, R, Q, P>,
): Promise<IHttpResponse<R>> {
  const response = await apiRoute.handle(request);
  return response;
}
