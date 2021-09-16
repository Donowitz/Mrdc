import { BackendModule } from './core/backend/backend.module';
import { SharedComponentModule } from './components/sharedComponent.module';
import { PageModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './core/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NebularModule } from './shared/nebular.module';
import { HttpClientModule } from '@angular/common/http';
import { OverlayContainer } from '@angular/cdk/overlay';
// import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedComponentModule,
    PageModule,
    BackendModule,
    NebularModule,
    FontAwesomeModule,
    AuthModule,
    // TooltipModule,
  ],
  providers: [{ provide: OverlayContainer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
