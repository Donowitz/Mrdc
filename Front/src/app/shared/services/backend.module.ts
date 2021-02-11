import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [ContactService],
  bootstrap: [],
})
export class BackendModule {}
