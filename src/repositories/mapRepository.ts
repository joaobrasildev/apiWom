import { getRepository } from "typeorm";
import { Map } from '../database/entities/Map'

export const create = async (data: any): Promise<Map> => {
  const repository = getRepository(Map);
  
  return repository.save(data);
};

export const findAllByUserId = async (user_id: string): Promise<any> => {
  const repository = getRepository(Map);
  const query = repository.createQueryBuilder('maps')
  query.andWhere('maps.user_id = :user_id', { user_id: user_id });

  const [data, count] = await query.getManyAndCount();

  return { data, count };  
};