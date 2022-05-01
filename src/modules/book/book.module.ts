import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/models/entities/book.entity';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
