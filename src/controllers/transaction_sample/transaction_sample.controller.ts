import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionSampleService } from '../../modules/transaction_sample/transaction_sample.service';
import { CreateDto } from './dto/create.dto';

@Controller('transaction_sample')
export class TransactionSampleController {
  constructor(private readonly service: TransactionSampleService) {}

  @Post()
  createOne(@Body() body: CreateDto) {
    return this.service.createOne(body);
  }

  @Post('many_at_once')
  createManyAtOnce(@Body() body: CreateDto[]) {
    return this.service.createManyAtOnce(body);
  }

  @Post('many_one_by_one')
  createManyOneByOne(@Body() body: CreateDto[]) {
    return this.service.createManyOneByOne(body);
  }

  @Post('many_one_by_one_in_transaction')
  createManyOneByOneInTransaction(@Body() body: CreateDto[]) {
    return this.service.createManyOneByOneInTransaction(body);
  }
}
