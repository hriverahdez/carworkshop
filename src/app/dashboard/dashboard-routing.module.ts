import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  DashboardComponent,
  DataSheetComponent,
  DashboardLayoutComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
