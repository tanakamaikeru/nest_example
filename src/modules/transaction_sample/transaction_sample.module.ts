import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../models/entities/user.entity';
import { TransactionSampleService } from './transaction_sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [TransactionSampleService],
  exports: [TransactionSampleService],
})
export class TransactionSampleModule {}
