import { Controller, Get } from '@nestjs/common';
import { Book } from 'src/modules/book/book.service';

@Controller('book')
export class BookController {

    constructor(private readonly book: Book) { }

    @Get()
    getOne() {
        return this.book.getOne();
    }
}
