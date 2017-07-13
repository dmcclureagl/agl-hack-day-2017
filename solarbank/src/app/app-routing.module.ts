import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './my-account/home/home.component';
import { GraphsComponent } from './my-account/graphs/graphs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'graphs', component: GraphsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
