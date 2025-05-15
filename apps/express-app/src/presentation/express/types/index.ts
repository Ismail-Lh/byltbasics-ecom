import type { Request } from "express";

export type EmptyRecord = Record<string, unknown>;

export type TypedRequest<
  B = EmptyRecord,
  P = EmptyRecord,
  Q = EmptyRecord,
> = Request<P, EmptyRecord, B, Q>;
