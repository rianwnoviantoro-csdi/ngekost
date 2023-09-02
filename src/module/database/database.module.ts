import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            database: 'ngekost',
            username: 'rianwnoviantoro',
            password: 'R0ZUSNVuZQ=',
            autoLoadEntities: true,
            synchronize: true,
          }),
          inject: [ConfigService],
        }),
      ],
})
export class DatabaseModule {}
