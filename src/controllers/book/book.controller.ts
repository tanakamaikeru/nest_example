import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from 'src/modules/book/book.service';

@Controller('book')
export class BookController {
  constructor(private readonly book: BookService) {}

  @Get(':authorId')
  getOne(@Param('authorId') authorId: string) {
    return this.book.findAllAuthorBooks(authorId);
  }
}
