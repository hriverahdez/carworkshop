import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  MechanicHomeComponent,
  ClientDetailsComponent,
  ClientItemComponent
} from "./containers";
import { ClientResolver } from "./shared/client.resolver";

const ROUTES: Routes = [
  {
    path: "",
    component: MechanicHomeComponent
  },
  {
    path: "details/:clientId",
    component: ClientDetailsComponent,
    data: {
      breadcrumb: "Details"
    }
  },
  {
    path: "client",
    component: ClientItemComponent,
    data: {
      breadcrumb: "Add Client"
    }
  },
  {
    path: "client/:clientId",
    component: ClientItemComponent,
    data: {
      breadcrumb: "Edit "
    }
    // resolve: {
    //   client: ClientResolver
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
