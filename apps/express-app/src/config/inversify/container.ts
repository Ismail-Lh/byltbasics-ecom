import "reflect-metadata";
import { Container } from "inversify";

import type { ILogger } from "@/application/providers";

import { Logger } from "@/infrastructure/providers";

import { TYPES } from "./types";

// Create and configure the container
const container = new Container();

// Initialize container - this function sets up all the bindings
function bootstrapContainer() {
  container
    .bind<ILogger>(TYPES.Logger)
    .to(Logger)
    .inSingletonScope();

  return container;
}

// Bootstrap the container
const bootstrappedContainer = bootstrapContainer();

export { bootstrappedContainer as container };
