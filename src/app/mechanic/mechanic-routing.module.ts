import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MechanicHomeComponent } from "./containers/mechanic-home/mechanic-home.component";
import { ClientDetailsComponent } from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: MechanicHomeComponent
  },
  {
    path: "details/:clientId",
    component: ClientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MechanicRoutingModule {}
