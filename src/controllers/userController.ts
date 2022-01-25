import { Response, Request } from "express";
import * as userService from "../services/userService";

export const create = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const data = req.body;
    const dataResponse = await userService.create(data);
  
    return res.status(201).json(dataResponse);
  };