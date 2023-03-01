import { check } from "express-validator";

export const createAdminValidator = [
  check("name").notEmpty(),
  check("email").notEmpty(),
  check("password").notEmpty(),
];

export const loginAdminValidator = [
  check("email").notEmpty(),
  check("password").notEmpty(),
];
