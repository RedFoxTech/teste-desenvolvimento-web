import { Request, Response, NextFunction } from "express";
import { AnySchema, ValidationError } from "yup";

export const schemaValidation =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body);
      req.body = validated;
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        return res
          .status(400)
          .json({ error: error.name, field: error.path, message: error.message });
      }
    }
  };
