import { Module } from '@nestjs/common';
import { TransactionSampleController } from './transaction_sample.controller';
import { TransactionSampleModule } from '../../modules/transaction_sample/transaction_sample.module';

@Module({
  imports: [TransactionSampleModule],
  controllers: [TransactionSampleController],
})
export class TransactionSampleCtrModule { }
