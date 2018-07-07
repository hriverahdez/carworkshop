import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  ClientHomeComponent,
  ClientProfileComponent,
  ClientProfileInfoComponent
} from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: ClientHomeComponent
  },
  {
    path: "profile",
    component: ClientProfileInfoComponent,
    data: {
      breadcrumb: "Perfil"
    }
  },
  {
    path: "editProfile",
    component: ClientProfileComponent,
    data: {
      breadcrumb: "Editar Perfil"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
