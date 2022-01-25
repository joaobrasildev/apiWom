import * as repository from "../repositories/mapRepository";

export const create = async (data: any): Promise<any> => {
  return await repository.create(data);
};

export const findAllByUserId = async (user_id: any): Promise<any> => {
  return await repository.findAllByUserId(user_id);
};