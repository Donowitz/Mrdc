import { EquipesComponent } from './equipes/equipes.component';
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

@NgModule({
  imports: [
    SharedComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackendModule,
  ],
  exports: [],
  declarations: [
    NousRejoindreComponent,
    HomeComponent,
    PartenariatComponent,
    MediasComponent,
    ContactComponent,
    EquipesComponent,
  ],
  providers: [],
})
export class PageModule {}
