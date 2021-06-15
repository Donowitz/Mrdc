import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { ResetPasswordGuard } from './guards/reset-password.guard';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [AuthGuard, ResetPasswordGuard],
})
export class SharedModule {}
