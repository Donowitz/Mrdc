import { HomeComponent } from './home/home.component';
import { SharedComponentModule } from './../components/sharedComponent.module';
import { NousRejoindreComponent } from './nous-rejoindre/nous-rejoindre.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [SharedComponentModule],
  exports: [],
  declarations: [NousRejoindreComponent, HomeComponent],
  providers: [],
})
export class PageModule {}
