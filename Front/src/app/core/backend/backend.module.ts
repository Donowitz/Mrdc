import { TeamsService } from './services/teams.service';
import { UsersService } from './services/users.service';
import { HttpService } from './http.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [HttpService, TeamsService, UsersService],
})
export class BackendModule {}
