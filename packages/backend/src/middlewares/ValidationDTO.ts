import {plainToClass, ClassConstructor} from 'class-transformer';
import {validate, ValidationError} from 'class-validator';
import {RequestHandler} from 'express';
import HttpException from '../exceptions/HttpException';

function validationMiddleware<T>(
    type: ClassConstructor<object | string>,
    skipMissingProperties = false,
): RequestHandler {
  return async (req, res, next) => {
    const errors: ValidationError[] = await validate(
        plainToClass(<ClassConstructor<any>>type, req.body), {skipMissingProperties},
    );

    if (errors.length > 0) {
      const message = errors.map((error: ValidationError) => Object.values(error.constraints || {})).join(', ');
      next(new HttpException(400, message));
    } else {
      next();
    }
  };
}

export default validationMiddleware;
