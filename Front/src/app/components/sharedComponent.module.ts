import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  imports: [CommonModule],
  exports: [PageLayoutComponent],
  declarations: [PageLayoutComponent],
  providers: [],
})
export class SharedComponentModule {}
