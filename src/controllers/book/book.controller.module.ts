import { Module } from '@nestjs/common';
import { BookModule } from 'src/modules/book/book.module';
import { BookController } from './book.controller';

@Module({
    imports: [BookModule],
    controllers: [BookController],
})
export class BookCtrModule { }
