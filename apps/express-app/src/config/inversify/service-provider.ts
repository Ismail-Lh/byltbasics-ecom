// Import reflect-metadata to enable decorators
import "reflect-metadata";

import type { ILogger } from "@/application/providers";

import { container } from "./container";
import { TYPES } from "./types";

export const logger = container.get<ILogger>(TYPES.Logger);
