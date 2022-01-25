import { Response, Request } from "express";
import * as mapService from "../services/mapService";

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const dataResponse = await mapService.create(data);
  
  return res.status(201).json(dataResponse);
};

export const findAllByUserId = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const id = req.query.user_id!;
  const dataResponse = await mapService.findAllByUserId(id);
  
  return res.status(200).json(dataResponse);
};  