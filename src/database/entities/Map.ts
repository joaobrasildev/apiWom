import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
  } from "typeorm";
import { User } from "./User";
  
@Entity("maps")
export class Map {
  @PrimaryGeneratedColumn("uuid")
  id?: string | undefined;
  
  @Column({
    nullable: false,
    type: "date",
  })
  data: Date;
  
  @Column({
    nullable: true,
    type: "boolean"  
  })
  statusDay: Boolean
  
  @Column('uuid')
  user_id: string;
  
  @ManyToOne(() => User, user => user.users)
  @JoinColumn({ name: 'user_id' })
  user?: User;
}
  