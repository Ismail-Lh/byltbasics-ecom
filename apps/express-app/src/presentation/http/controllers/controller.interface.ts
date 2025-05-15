import type { EmptyRecord } from "@/presentation/express/types";

import type { IHttpRequest, IHttpResponse } from "../helpers/interfaces";

export interface IHttpController<B, R, Q = EmptyRecord, P = EmptyRecord> {
  handle: (request: IHttpRequest<B, Q, P>) => Promise<IHttpResponse<R>>;
}
