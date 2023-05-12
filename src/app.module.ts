import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/ormConfig';
import { UserModule } from './modules/user/user.module';
import { CommonModule } from './common/common.module';
import configuration from './configuration/configuration';
import { LoggerMiddleware } from './custom/middleware/logger.middleware';
// console.log(process.env.MONGO_URL,"mongo_url")

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),

  TypeOrmModule.forRoot(ormConfig()),
    UserModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
