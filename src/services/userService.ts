import * as repository from "../repositories/userRepository";

export const create = async (data: any): Promise<any> => {
  return await repository.create(data);
};