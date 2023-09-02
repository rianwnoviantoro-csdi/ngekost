import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from 'src/entities/tenant.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Tenant]),
    ]
})
export class TenantModule {}
