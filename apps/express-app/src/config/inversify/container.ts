import "reflect-metadata";
import { Container } from "inversify";

import type { ILoggerService } from "@/services";

import { LoggerService } from "@/services";

import { TYPES } from "./types";

// Create and configure the container
const container = new Container();

// Initialize container - this function sets up all the bindings
function bootstrapContainer() {
  container
    .bind<ILoggerService>(TYPES.LoggerService)
    .to(LoggerService)
    .inSingletonScope();

  return container;
}

// Bootstrap the container
const bootstrappedContainer = bootstrapContainer();

export { bootstrappedContainer as container };
