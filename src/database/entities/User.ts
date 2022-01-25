import {
    Entity,
    Column,
    Unique,
    PrimaryGeneratedColumn,
    OneToMany,
  } from "typeorm";
import { Map } from "./Map";
  
  @Unique(["name"])
  @Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string | undefined;
  
  @Column({
    nullable: false,
    length: 200,
    type: "varchar",
  })
  name: string;
  
  @OneToMany(() => Map, map => map.user_id)
  users: Map[];
}
