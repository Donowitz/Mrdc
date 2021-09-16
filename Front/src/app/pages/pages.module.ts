import { NebularModule } from './../shared/nebular.module';
import { ClubComponent } from './club/club.component';
import { QuezakoComponent } from './quezako/quezako.component';
import { TeamsComponent } from './teams/teams.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { MediasComponent } from './medias/medias.component';
import { PartenariatComponent } from './partenariat/partenariat.component';
import { HomeComponent } from './home/home.component';
import { SharedComponentModule } from './../components/sharedComponent.module';
import { NousRejoindreComponent } from './nous-rejoindre/nous-rejoindre.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendModule } from '../shared/services/backend.module';
import { TeamDialogComponent } from './teams/team-dialog/team-dialog.component';
import { OverlayContainer } from '@angular/cdk/overlay';
// import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    SharedComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackendModule,
    NebularModule,
    // TooltipModule,
  ],
  exports: [],
  declarations: [
    NousRejoindreComponent,
    HomeComponent,
    PartenariatComponent,
    MediasComponent,
    ContactComponent,
    TeamsComponent,
    QuezakoComponent,
    ClubComponent,
    TeamDialogComponent,
  ],
  providers: [],
})
export class PageModule {}
