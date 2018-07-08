import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  DashboardComponent,
  DataSheetComponent,
  DashboardLayoutComponent,
  NextMaintenancesComponent
} from "./containers";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
