import { Module } from '@nestjs/common';
import { AuthorCtrModule } from './author/author.controller.module';
import { BookCtrModule } from './book/book.controller.module';
import { TransactionSampleCtrModule } from './transaction_sample/transaction_sample.controller.module';

@Module({
  imports: [AuthorCtrModule, BookCtrModule, TransactionSampleCtrModule],
  controllers: [],
})
export class ControllerModule {}
