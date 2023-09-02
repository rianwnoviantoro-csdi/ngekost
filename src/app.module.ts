import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database/database.module';
import { AccountModule } from './module/account/account.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AccountModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
