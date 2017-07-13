import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Kendo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
  ],
  declarations: [HomeComponent]
})
export class MyAccountModule { }
