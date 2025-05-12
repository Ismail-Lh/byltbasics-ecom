// Import reflect-metadata to enable decorators
import "reflect-metadata";

import type { ILoggerService } from "@/services";

import { container } from "./container";
import { TYPES } from "./types";

export const loggerService = container.get<ILoggerService>(TYPES.LoggerService);
