import { Controller, Get } from '@nestjs/common';
import { Author } from 'src/modules/author/author.service';

@Controller('author')
export class AuthorController {

    constructor(private readonly author: Author) { }

    @Get()
    getOne() {
        return this.author.getOne();
    }
}
