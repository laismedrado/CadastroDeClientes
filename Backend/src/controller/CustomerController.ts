import { Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  createCustomerRegistration,
  deleteCustomer,
  getAllCustomerRegistration,
} from "../services/CustomerService";
import { Error as httpCodeError } from "../error/httpCodes";
import { Sucess as httpCode } from "../error/httpCodes";
import { messages } from "../error/messages";

export const CreateCustomerEndpoint = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpCodeError.BadRequest)
        .json({ errors: errors.array() });
    }
    const { id, email, name, cpf } = req.body;
    const customerAccount = await createCustomerRegistration({
      id,
      email,
      name,
      cpf,
    });
    return res.status(201).json(customerAccount);
  } catch (error: any) {
    console.log(error); //pq o log do erro pode trazer mais pistas do erro no terminal
    res.status(400).json(error.message);
  }
};

export const getAllCustomertEndpoint = async (req: Request, res: Response) => {
  const result = await getAllCustomerRegistration();
  return res.status(200).json(result);
};

export const deleteCustomerEndpoint = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteCustomer(String(id));
    return res.status(httpCode.OK).json(messages.delete("cliente"));
  } catch (error: any) {
    console.log(error);
    res.status(httpCodeError.BadRequest).json(messages.notDelete("cliente"));
  }
};
