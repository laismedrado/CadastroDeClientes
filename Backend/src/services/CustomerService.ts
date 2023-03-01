import { customerRecord } from "../model/Customer";
import { prisma } from "../data/PrismaClient";
import { AppError } from "../error/AppErrors";
import { messages } from "../error/messages";
import { CpfValidate } from "../validator/CPFvalidate";

export const createCustomerRegistration = async (
  input: customerRecord
): Promise<customerRecord> => {
  try {
    const { name, email, cpf } = input;
    const customerExists = await prisma.customer.findUnique({
      where: { email },
    });
    if (customerExists) {
      throw new AppError(messages.alreadyExist("Usuário"));
    }
    //validando cpf
    if (!CpfValidate(cpf)) {
      throw new AppError("CPF inválido ");
    }
    const CPFAlreadyExists = await prisma.customer.findUnique({
      where: { cpf },
    });
    if (CPFAlreadyExists) {
      throw new AppError(messages.alreadyExist("Usuário  com esse CPF"));
    }
    const customerRegistration = await prisma.customer.create({
      data: {
        name,
        email,
        cpf,
      },
    });
    return customerRegistration;
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
export const getAllCustomerRegistration = async (): Promise<
  customerRecord[]
> => {
  try {
    const getAll = await prisma.customer.findMany();
    return getAll;
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
export const deleteCustomer = async (id: string) => {
  try {
    const customerDelete = await prisma.customer.update({
      where: { id: id },
      data: { active: false },
    });
    return customerDelete;
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
