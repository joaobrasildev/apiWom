import { getRepository } from "typeorm";
import { User } from '../database/entities/User'

export const create = async (data: any): Promise<User> => {
  const repository = getRepository(User);
  
  return repository.save(data);
};