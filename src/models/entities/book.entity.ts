import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book implements IBook {
  constructor(bookProperties: IBookInitialProperties) {
    Object.assign(this, bookProperties);
  }

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

interface IBook extends IBookAutoGenerateProperties, IBookInitialProperties { }

interface IBookAutoGenerateProperties {
  id: number;
}

interface IBookInitialProperties {
  title: string;
  authorId: string;
}
