// estou acessando a tipagem do Express e adicionando uma nova prop.
declare namespace Express {
  export interface Request {
    userId: string;
  }
}