import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientHomeComponent, ClientProfileComponent } from "./containers";
import { ClientLoadedGuard } from "./guards";
import { MaintenanceCategoriesExistGuard } from "../@core/guards";

const ROUTES: Routes = [
  {
    path: "",
    // component: ClientHomeComponent
    loadChildren: "../dashboard/dashboard.module#DashboardModule",
    data: {
      breadcrumb: "Dashboard"
    },
    canActivate: [ClientLoadedGuard, MaintenanceCategoriesExistGuard],
    canActivateChild: [ClientLoadedGuard, MaintenanceCategoriesExistGuard]
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
