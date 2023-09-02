import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database/database.module';
import { AccountModule } from './module/account/account.module';
import { ConfigModule } from '@nestjs/config';
import { LandlordModule } from './module/landlord/landlord.module';
import { TenantModule } from './module/tenant/tenant.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AccountModule,
    LandlordModule,
    TenantModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
