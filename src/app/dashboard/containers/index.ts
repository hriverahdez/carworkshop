import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { DataSheetComponent } from "./data-sheet/data-sheet.component";
import { NextMaintenancesComponent } from "./next-maintenances/next-maintenances.component";

export const containers: any[] = [
  DashboardComponent,
  DashboardLayoutComponent,
  DataSheetComponent,

  NextMaintenancesComponent
];

export * from "./dashboard/dashboard.component";
export * from "./dashboard-layout/dashboard-layout.component";
export * from "./data-sheet/data-sheet.component";
export * from "./next-maintenances/next-maintenances.component";
