import { routes } from "./routes/index";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./error/AppErrors";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
      details: err.stack,
    });
  }
);

app.listen(3000, () =>
  console.log("server is running on  http://localhost:3000")
);
