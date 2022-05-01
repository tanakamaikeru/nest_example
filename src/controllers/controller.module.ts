import { Module } from '@nestjs/common';
import { AuthorCtrModule } from './author/author.controller.module';
import { BookCtrModule } from './book/book.controller.module';

@Module({
  imports: [AuthorCtrModule, BookCtrModule],
  controllers: [],
})
export class ControllerModule {}
