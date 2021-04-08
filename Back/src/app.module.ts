import { UsersModule } from './users/users.module';
import { Teams } from './teams/teams.entity';
import { TeamsModule } from './teams/teams.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        port: configService.get('DATABASE_PORT'),

        entities: [Teams, Users],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      // [TODO:] Set NODE_ENV on server => https://riptutorial.com/node-js/example/10101/setting-node-env--production-
      envFilePath: `${process.env.NODE_ENV || 'development'}.env`,
    }),
    TeamsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
