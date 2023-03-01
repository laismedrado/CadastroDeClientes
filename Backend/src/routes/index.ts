import express, { Router } from "express";
import { adminRoutes } from "./AdminRouter";
import { customerRoutes } from "./CustomerRouter";

const app = express();
export const routes = Router();

routes.use("/admin", adminRoutes);
routes.use("/customer", customerRoutes);
