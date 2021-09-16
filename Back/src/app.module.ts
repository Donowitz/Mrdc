import { AuthModule } from './auth/auth.module';
import { Media } from './media/media.entity';
import { MediaModule } from './media/media.module';
import { UserModule } from './user/user.module';
import { Team } from './team/team.entity';
import { TeamModule } from './team/team.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/user.entity';
import { TrainingModule } from './training/training.module';
import { Training } from './training/training.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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

        entities: [Team, User, Media, Training],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV || 'development'}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'Files/teams'),
      serveRoot: '/teams',
      serveStaticOptions: {
        index: false,
      },
      exclude: ['/api*'],
    }),
    TeamModule,
    UserModule,
    MediaModule,
    TrainingModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
