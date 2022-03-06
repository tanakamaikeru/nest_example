import { Module } from '@nestjs/common';
import { Author } from './author.service';

@Module({
    imports: [],
    providers: [Author],
    exports: [Author]
})
export class AuthorModule { }
