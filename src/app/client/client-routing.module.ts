import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  ClientHomeComponent,
  ClientProfileComponent,
  ClientProfileInfoComponent
} from "./containers";
import { ClientLoadedGuard } from "./guards";

const ROUTES: Routes = [
  {
    path: "",
    // component: ClientHomeComponent
    loadChildren: "../dashboard/dashboard.module#DashboardModule",
    data: {
      breadcrumb: "Dashboard"
    },
    canActivate: [ClientLoadedGuard],
    canActivateChild: [ClientLoadedGuard]
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
