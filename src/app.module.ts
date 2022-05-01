import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { OrmModule } from './models/orm.module';

@Module({
  imports: [ControllerModule, OrmModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '(.*)', method: RequestMethod.ALL });
  }
}
