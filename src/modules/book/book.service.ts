import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/models/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepo: Repository<Book>,
  ) {}

  async findAllAuthorBooks(authorId: string): Promise<Book[]> {
    return this.bookRepo.find({
      authorId: authorId,
    });
  }
}
