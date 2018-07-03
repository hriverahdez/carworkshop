import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  ClientHomeComponent,
  ProfileComponent,
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
    component: ProfileComponent,
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
