import { AuthModule } from './core/auth/auth.module';
import { BackendModule } from './core/backend/backend.module';
import { SharedComponentModule } from './components/sharedComponent.module';
import { PageModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NebularModule } from './shared/nebular.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentModule,
    PageModule,
    BackendModule,
    AuthModule,
    NebularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
