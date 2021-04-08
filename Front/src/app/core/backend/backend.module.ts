import { TeamsService } from './services/equipes.service';
import { HttpService } from './http.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [HttpService, TeamsService],
})
export class BackendModule {}
