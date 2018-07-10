import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  ClientListComponent,
  ClientItemComponent,
  MaintenanceItemComponent
} from "./containers";

import { ClientExistsGuard, MaintenanceExistsGuard } from "./guards";
import { AdminProfileComponent } from "./containers/admin-profile/admin-profile.component";
import { AdminListComponent } from "./containers/admin-list/admin-list.component";
import { AdminItemComponent } from "./containers/admin-item/admin-item.component";
import { MaintenanceCategoriesExistGuard } from "../@core/guards";

const ROUTES: Routes = [
  {
    path: "",
    component: ClientListComponent
  },
  {
    path: "details/:clientId",
    loadChildren: "../dashboard/dashboard.module#DashboardModule",
    data: {
      breadcrumb: "Detalles"
    },
    canActivate: [ClientExistsGuard, MaintenanceCategoriesExistGuard]
  },
  {
    path: "addMaintenance/:carId",
    component: MaintenanceItemComponent,
    canActivate: [MaintenanceCategoriesExistGuard],
    data: {
      breadcrumb: "Agregar Mantenimiento"
    }
  },
  {
    path: "editMaintenance/:maintenanceId",
    component: MaintenanceItemComponent,
    canActivate: [MaintenanceCategoriesExistGuard, MaintenanceExistsGuard],
    data: {
      breadcrumb: "Editar Mantenimiento"
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
    canActivate: [ClientExistsGuard],
    data: {
      breadcrumb: "Editar Cliente"
    }
  },
  {
    path: "profile",
    component: AdminProfileComponent,
    data: {
      breadcrumb: "Mi perfil"
    }
  },
  {
    path: "accounts",
    component: AdminListComponent,
    data: {
      breadcrumb: "Administradores"
    }
  },
  {
    path: "addAccount",
    component: AdminItemComponent,
    data: {
      breadcrumb: "Agregar administrador"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
