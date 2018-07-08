import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { DataSheetComponent } from "./data-sheet/data-sheet.component";

export const containers: any[] = [
  DashboardComponent,
  DashboardLayoutComponent,
  DataSheetComponent
];

export * from "./dashboard/dashboard.component";
export * from "./dashboard-layout/dashboard-layout.component";
export * from "./data-sheet/data-sheet.component";
