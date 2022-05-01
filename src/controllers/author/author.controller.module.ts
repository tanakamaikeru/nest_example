import { Module } from '@nestjs/common';
import { AuthorModule } from 'src/modules/author/author.module';
import { AuthorController } from './author.controller';

@Module({
  imports: [AuthorModule],
  controllers: [AuthorController],
})
export class AuthorCtrModule {}
