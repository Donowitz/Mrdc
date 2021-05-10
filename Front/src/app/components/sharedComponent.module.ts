import { NebularModule } from './../shared/nebular.module';
import { ScrollIconComponent } from './scroll-icon/scroll-icon.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { NaviguationComponent } from './naviguation/naviguation.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, NebularModule, AppRoutingModule],
  exports: [
    PageLayoutComponent,
    SubNavComponent,
    ScrollIconComponent,
    NaviguationComponent,
  ],
  declarations: [
    PageLayoutComponent,
    SubNavComponent,
    ScrollIconComponent,
    NaviguationComponent,
  ],
  providers: [],
})
export class SharedComponentModule {}
