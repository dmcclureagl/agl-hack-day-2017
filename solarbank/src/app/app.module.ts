import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MobileHeaderComponent } from './header/mobile-header/mobile-header.component';

// Kendo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

// Services
import { LoggedInService } from './logged-in.service';

import { LandingPageComponent } from './my-account/landing-page/landing-page.component';
import { GraphsComponent } from './my-account/graphs/graphs.component';
import { UserpageComponent } from './my-account/userpage/userpage.component';
import { SliderMenuComponent } from './header/slider-menu/slider-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    MobileHeaderComponent,
    GraphsComponent,
    UserpageComponent,
    SliderMenuComponent
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
  providers: [
    LoggedInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
