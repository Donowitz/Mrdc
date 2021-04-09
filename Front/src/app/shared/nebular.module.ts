import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbAlertModule,
  NbCheckboxModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbInputModule,
    NbAlertModule,
    NbCheckboxModule,
  ],
  exports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbInputModule,
    NbAlertModule,
    NbCheckboxModule,
  ],
  declarations: [],
  providers: [],
})
export class NebularModule {}
