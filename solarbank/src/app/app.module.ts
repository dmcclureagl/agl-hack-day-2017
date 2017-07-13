import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

// Kendo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

import { LandingPageComponent } from './my-account/landing-page/landing-page.component';
import { GraphsComponent } from './my-account/graphs/graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
