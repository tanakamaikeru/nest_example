import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  authorId: string;

  @ManyToOne(() => Author, (author) => author.id, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn([
    {
      name: 'id',
      referencedColumnName: 'id',
    },
  ])
  author: Author;
}
