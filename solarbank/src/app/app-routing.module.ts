import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './my-account/landing-page/landing-page.component';
import { GraphsComponent } from './my-account/graphs/graphs.component';
import { UserpageComponent } from './my-account/userpage/userpage.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: UserpageComponent },
  { path: 'graphs', component: GraphsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
