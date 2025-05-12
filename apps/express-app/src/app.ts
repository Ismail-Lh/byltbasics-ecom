import "reflect-metadata";

// Import from our service provider which uses the DI container
import "@/config/inversify";

import type { Express } from "express";

import cors from "cors";
import express from "express";
import helmet from "helmet";

const app: Express = express();

app.use(helmet());

app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Configure CORS middleware
app.use(
  cors({
    origin: ["http://localhost:3000"], // Specify the allowed origin(s) for requests
    credentials: true, // Allow sending cookies along with the requests
  }),
);

app.get("/", (_req, res) => {
  res.json({ message: "Hello from the server!" });
});

export default app;
