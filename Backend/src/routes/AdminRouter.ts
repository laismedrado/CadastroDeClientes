import { Router } from "express";
import {
  AuthAdminEndpoint,
  CreateAdminEndpoint,
} from "../controller/AdminController";
import {
  createAdminValidator,
  loginAdminValidator,
} from "../validator/AdminValidator";

export const adminRoutes = Router();

adminRoutes.post("/create", createAdminValidator, CreateAdminEndpoint);
adminRoutes.post("/auth", loginAdminValidator, AuthAdminEndpoint);
