import { Router } from "express";
import {
  CreateCustomerEndpoint,
  deleteCustomerEndpoint,
  getAllCustomertEndpoint,
} from "../controller/CustomerController";
import { authMiddlewares } from "../middlewares/auth";
import { createCustomerValidator } from "../validator/CustomerValidator";

export const customerRoutes = Router();

customerRoutes.post("/create", createCustomerValidator, CreateCustomerEndpoint);
customerRoutes.get("/registration", authMiddlewares, getAllCustomertEndpoint);
customerRoutes.delete("/delete/:id", deleteCustomerEndpoint);
