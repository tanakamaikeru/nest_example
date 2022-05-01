import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['code'])
export class User implements IUser {
  constructor(data: IUser) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  code: number;

  @Column()
  name: string;
}

export interface IUser {
  id?: number;
  code: number;
  name: string;
}