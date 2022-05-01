import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, User } from '../../models/entities/user.entity';
import { Repository, Transaction, TransactionRepository } from 'typeorm';

@Injectable()
export class TransactionSampleService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async createOne(data: IUser): Promise<User> {
    return await this.userRepo.save(new User(data));
  }

  async createManyAtOnce(data: IUser[]): Promise<User[]> {
    return await this.userRepo.save(data.map((v) =>
      new User(v)
    ))
  }

  async createManyOneByOne(data: IUser[]): Promise<User[]> {
    const result: User[] = [];
    for (const v of data) {
      result.push(await this.userRepo.save(new User(v)));
    }
    return result;
  }

  @Transaction()
  async createManyOneByOneInTransaction(
    data: IUser[],
    @TransactionRepository(User) repo?: Repository<User>
  ): Promise<User[]> {
    const result: User[] = [];
    for (const v of data) {
      result.push(await repo.save(new User(v)));
    }
    return result;
  }
}
