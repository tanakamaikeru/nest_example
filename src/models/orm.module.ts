import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from './config/connection.config';

@Module({
    imports: [
        TypeOrmModule.forRoot(
            connectionOptions
        )
    ],
})
export class AppModule { }
