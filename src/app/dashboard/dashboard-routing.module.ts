import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  DashboardComponent,
  DataSheetComponent,
  DashboardLayoutComponent,
  NextMaintenancesComponent,
  ClientInfoComponent,
  MaintenanceHistoryComponent
} from "./containers";
import { RecommendationsComponent } from "./containers/recommendations/recommendations.component";

const ROUTES: Routes = [
  {
    path: "",
    component: DashboardLayoutComponent,

    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "dataSheet",
        component: DataSheetComponent,
        data: {
          breadcrumb: "Ficha Técnica"
        }
      },
      {
        path: "nextMaintenances",
        component: NextMaintenancesComponent,
        data: {
          breadcrumb: "Próximos Mantenimientos"
        }
      },
      {
        path: "profileInfo",
        component: ClientInfoComponent,
        data: {
          breadcrumb: "Perfil del Cliente"
        }
      },
      {
        path: "maintenanceHistory",
        component: MaintenanceHistoryComponent,
        data: {
          breadcrumb: "Historial"
        }
      },
      {
        path: "recommendations",
        component: RecommendationsComponent,
        data: {
          breadcrumb: "Recomendaciones de Mantenimiento"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
