import { IsNotEmpty } from 'class-validator';

export class TeamDto {
  public id: string;
  public teamName: string;
  public teamStory: string;
  //public teamLogo: string;
  // public teamPicture: string;
  public order: number;
  public isActiveTeam: boolean;
  public flatTrackUrl: string;
}

export class CreateTeamDto {
  @IsNotEmpty()
  public teamName: string;
  public teamStory: string;
  //public teamLogo: string;
  // public teamPicture: string;
  public order: number;
  public flatTrackUrl: string;
}
