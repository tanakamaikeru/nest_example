import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from './config/connection.config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true, ...connectionOptions }),
  ],
})
export class OrmModule {}
