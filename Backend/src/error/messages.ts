export const messages = {
  notExist: (name: string) => `${name} não existe`,
  notFound: (name: string) => `${name} não encontrado`,
  alreadyExist: (name: string) => `${name} já existe`,
  invalid: (name: string) => `${name} inválido(a)`,
  unauthorized: (name: string) => `${name} não autorizado`,
  notDelete: (name: string) => `${name} não deletado`,
  delete: (name: string) => `${name} deletado`,
  notEmpty: (name: string) => `${name}  não pode estar vazio`,
  recordCreated: (name: string) => `${name} criado com sucesso.`,
  recordNotCreated: (name: string) => `${name} não foi criado.`,
  sucessStatus: (name: string) => ` ${name} bem sucedida`,
  unsuccessful: (name: string) => ` ${name} mal sucedida`,
};
