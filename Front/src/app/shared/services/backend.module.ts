import { FormService } from './form.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { AnimationService } from './animation.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [ContactService, AnimationService, FormService],
  bootstrap: [],
})
export class BackendModule {}
