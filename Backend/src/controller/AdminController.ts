import { Request, Response } from "express";
import { authAdmin, createAdmin } from "../services/AdminService";
import { Sucess as httpCode } from "../error/httpCodes";
import { Error as httpCodeError } from "../error/httpCodes";
import { messages } from "../error/messages";
import { validationResult } from "express-validator";

export const CreateAdminEndpoint = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpCodeError.BadRequest)
        .json({ errors: errors.array() });
    }
    const { id, email, name, password } = req.body;
    const adminAccount = await createAdmin({ id, email, name, password });
    return res.status(httpCode.Created).json("Administrador criado");
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.InternalServerError).json(error.message);
  }
};

export const AuthAdminEndpoint = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpCodeError.BadRequest)
        .json({ errors: errors.array() });
    }
    const { id, email, password, name } = req.body;
    const AdminAccountAuth = await authAdmin({ id, email, password, name });
    return res.status(httpCode.OK).json(AdminAccountAuth);
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.InternalServerError).json(error.message);
  }
};
