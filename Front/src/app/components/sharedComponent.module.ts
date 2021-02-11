import { ScrollIconComponent } from './scroll-icon/scroll-icon.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  imports: [CommonModule],
  exports: [PageLayoutComponent, SubNavComponent, ScrollIconComponent],
  declarations: [PageLayoutComponent, SubNavComponent, ScrollIconComponent],
  providers: [],
})
export class SharedComponentModule {}
