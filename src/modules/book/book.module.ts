import { Module } from '@nestjs/common';
import { Book } from './book.service';

@Module({
    imports: [],
    providers: [Book],
    exports: [Book]
})
export class BookModule { }
