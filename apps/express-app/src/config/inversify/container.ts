import "reflect-metadata";
import { Container } from "inversify";

// Create and configure the container
const container = new Container();

// Initialize container - this function sets up all the bindings
function bootstrapContainer() {
  return container;
}

// Bootstrap the container
const bootstrappedContainer = bootstrapContainer();

export { bootstrappedContainer as container };
