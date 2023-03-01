import { check } from "express-validator";

export const createCustomerValidator = [
  check("name").notEmpty(),
  check("email").notEmpty(),
  check("cpf").notEmpty(),
];
