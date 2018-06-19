import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  MechanicHomeComponent,
  ClientDetailsComponent,
  ClientItemComponent
} from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: MechanicHomeComponent
  },
  {
    path: "details/:clientId",
    component: ClientDetailsComponent
  },
  {
    path: "client",
    component: ClientItemComponent
  },
  {
    path: "client/:clientId",
    component: ClientItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MechanicRoutingModule {}
