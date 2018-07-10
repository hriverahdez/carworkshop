import { ClientInfoComponent } from "./client-info/client-info.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { DataSheetComponent } from "./data-sheet/data-sheet.component";

import { MaintenanceHistoryComponent } from "./maintenance-history/maintenance-history.component";

import { NextMaintenancesComponent } from "./next-maintenances/next-maintenances.component";

import { RecommendationsComponent } from "./recommendations/recommendations.component";

export const containers: any[] = [
  ClientInfoComponent,

  DashboardComponent,
  DashboardLayoutComponent,
  DataSheetComponent,

  MaintenanceHistoryComponent,

  NextMaintenancesComponent,

  RecommendationsComponent
];

export * from "./client-info/client-info.component";
export * from "./dashboard/dashboard.component";
export * from "./dashboard-layout/dashboard-layout.component";
export * from "./data-sheet/data-sheet.component";
export * from "./maintenance-history/maintenance-history.component";
export * from "./next-maintenances/next-maintenances.component";
export * from "./recommendations/recommendations.component";
