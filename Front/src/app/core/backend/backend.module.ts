import { TeamService } from './services/team.service';
import { UserService } from './services/user.service';
import { HttpService } from './http.service';
import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [AuthModule],
  exports: [],
  declarations: [],
  providers: [HttpService, TeamService, UserService],
})
export class BackendModule {}
