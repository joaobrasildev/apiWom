import { NextFunction, Request, Response } from "express";
import { HttpError } from "./HttpError";

export const errorHandling = (
  error: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { code, message, errors } = <any>error;
  const apiError = {
    code: code || 500,
    message,
    errors,
  };

  return res.status(apiError.code).send(apiError);
};
