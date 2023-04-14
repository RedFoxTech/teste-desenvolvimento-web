import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).json('Token not found!')
  }

  const [,token] = authToken.split(' ');

  try {
    const userId = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as string;

    req.userId = userId;

    return next();
  } catch (error) {
    return res.status(401).json('Token inválido!')
  }
}