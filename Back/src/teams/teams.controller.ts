import { TeamsDto } from '../shared/models/dto/teamsDto';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  // @Get(':id')
  // getOfficeById(@Param('id') id: string): Promise<OfficeDto> {
  //   return this.officeService.getOffice(id);
  // }

  @Get()
  async getAllTeams(): Promise<TeamsDto[]> {
    return this.teamsService.getAllTeams();
  }

  // @Post()
  // createOffice(@Body() office: CreateOfficeDto): Promise<OfficeDto> {
  //   return this.officeService.createOffice(office);
  // }

  // @Put(':id')
  // updateOffice(@Param('id') id: string, @Body() office: OfficeDto): Promise<UpdateResult> {
  //   return this.officeService.updateOffice(id, office);
  // }

  // @Delete()
  // deleteClassName_singular(@Param('id') id: string) {
  //   this.officeService.deleteOffice(id);
  // }
}
