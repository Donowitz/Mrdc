import { OverlayContainer } from '@angular/cdk/overlay';
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
  NbDialogModule,
  NbLayoutModule,
  NbToastrModule,
  NbSelectModule,
  NbDatepickerModule,
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
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbToastrModule.forRoot(),
    NbSelectModule,
    NbDatepickerModule.forRoot(),
  ],
  exports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbInputModule,
    NbAlertModule,
    NbCheckboxModule,
    NbDialogModule,
    NbLayoutModule,
    NbToastrModule,
    NbSelectModule,
    NbDatepickerModule,
  ],
  declarations: [],
  providers: [],
})
export class NebularModule {}
