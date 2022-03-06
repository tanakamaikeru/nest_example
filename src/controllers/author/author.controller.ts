import { Controller, Get, Param } from '@nestjs/common';
import { AuthorService } from 'src/modules/author/author.service';

@Controller('author')
export class AuthorController {

    constructor(private readonly author: AuthorService) { }

    @Get(':id')
    getOne(
        @Param('id') id: string,
    ) {
        return this.author.findOne(id);
    }
}
