import { TeamModule } from './../team/team.module';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingController } from './training.controller';
import { Training } from './training.entity';
import { TrainingService } from './training.service';

@Module({
  imports: [TypeOrmModule.forFeature([Training]), TeamModule],
  controllers: [TrainingController],
  providers: [TrainingService],
  exports: [TrainingService],
})
export class TrainingModule {}
