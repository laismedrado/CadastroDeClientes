import { authAccountAdmin } from "../model/Admin";
import { compare, hash } from "bcryptjs";
import { prisma } from "../data/PrismaClient";
import { createAccountAdmin } from "../model/Admin";
import { sign } from "jsonwebtoken";
import { AppError } from "../error/AppErrors";
import { messages } from "../error/messages";

export const createAdmin = async (
  input: createAccountAdmin
): Promise<createAccountAdmin> => {
  try {
    const { name, email, password } = input;
    
    const adminExists = await prisma.admin.findUnique({ where: { email } });
    if (adminExists) {
      throw new AppError(messages.alreadyExist("Administrador"));
    }
  //validação de nome
    const nameValidate = name.split(" ");
    if (nameValidate.length < 2) {
      throw new AppError(
        "Preencha o campo corretamente colocando nome e sobrenome."
      );
    }
//validação de senha
    const regexNumber = /(?=.*[0-9])/gm;
    const regexLowerCase = /(?=.*[a-z])/gm;
    const regexUpperCase = /(?=.*[A-Z])/gm;
    const regexChar = /([a-zA-Z0-9]{8,})/gm;
    if (!regexNumber.test(password)) {
      throw new Error("Senha deve conter ao menos um número");
    }
    if (!regexLowerCase.test(password)) {
      throw new Error("Senha deve conter ao menos uma letra minúscula");
    }
    if (!regexUpperCase.test(password)) {
      throw new Error("Senha deve conter ao menos uma letra maiúscula");
    }
    if (!regexChar.test(password)) {
      throw new Error("Senha deve conter ao menos dez caracteres");
    }
    const hash_password = await hash(password, 8);

    const adminAccount = await prisma.admin.create({
      data: {
        name,
        email,
        password: hash_password,
      },
    });
    return adminAccount;
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};

export const authAdmin = async (input: authAccountAdmin): Promise<any> => {
  try {
    const { email, password } = input;

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      throw new AppError(messages.notFound("Administrador"));
    }

    const isPasswordValid = await compare(password, admin.password);

    if (!isPasswordValid) {
      throw new AppError(messages.notFound("Senha"));
    }

    const token = sign({ id: admin.id }, process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });
    const { id } = admin;
    return { admin: { id, email }, token };
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
