import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  ClientListComponent,
  ClientDetailsComponent,
  ClientItemComponent,
  DashboardComponent
} from "./containers";
import { ClientResolver } from "./shared/client.resolver";

const ROUTES: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "clients",
    component: ClientListComponent,
    data: {
      breadcrumb: "Clientes"
    }
  },
  {
    path: "details/:clientId",
    component: ClientDetailsComponent,
    data: {
      breadcrumb: "Detalles"
    }
  },
  {
    path: "client",
    component: ClientItemComponent,
    data: {
      breadcrumb: "Agregar Cliente"
    }
  },
  {
    path: "client/:clientId",
    component: ClientItemComponent,
    data: {
      breadcrumb: "Editar Cliente"
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
