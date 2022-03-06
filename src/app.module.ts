import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { OrmModule } from './models/orm.module';

@Module({
  imports: [ControllerModule, OrmModule],
})
export class AppModule {}
