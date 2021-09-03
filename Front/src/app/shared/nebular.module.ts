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
  NbTooltipModule,
  NbSelectModule,
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
    NbTooltipModule,
    NbSelectModule,
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
    NbTooltipModule,
    NbSelectModule,
  ],
  declarations: [],
  providers: [],
})
export class NebularModule {}
