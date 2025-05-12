import app from "@/app";
import { envConfig } from "@/config";

const PORT = envConfig.server.port || 8080;

/**
 * Starts the server and listens on the specified port.
 *
 * Logs a message indicating that the server is running.
 */
const server = app.listen(PORT, async () => {
  console.log(
    `Server is running on http://localhost:${PORT}`,
  );
});

/**
 * Event listener for uncaught exceptions.
 *
 * Logs the error and shuts down the process.
 *
 * @param {Error} err - The uncaught exception error.
 */
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

/**
 * Event listener for unhandled promise rejections.
 *
 * Logs the error and shuts down the server gracefully.
 *
 * @param {Error} err - The unhandled rejection error.
 */
process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
