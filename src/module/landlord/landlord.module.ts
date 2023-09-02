import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landlord } from 'src/entities/landlord.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Landlord]),
    ]
})
export class LandlordModule {}
