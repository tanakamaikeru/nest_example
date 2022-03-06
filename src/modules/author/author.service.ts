import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/models/entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepo: Repository<Author>
    ) { }

    async findOne(id: string): Promise<Author> {
        return this.authorRepo.findOne(id);
    }
}
