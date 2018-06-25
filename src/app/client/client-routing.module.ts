import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ClientHomeComponent } from './containers/client-home/client-home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ClientHomeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
