import { CarInfoPaneComponent } from "./car-info-pane/car-info-pane.component";
import { ClientDataSheetComponent } from "./client-data-sheet/client-data-sheet.component";
import { ClientInfoPaneComponent } from "./client-info-pane/client-info-pane.component";
import { MaintenanceHistoryComponent } from "./maintenance-history/maintenance-history.component";
import { MaintenanceRecommendsComponent } from "./maintenance-recommends/maintenance-recommends.component";
import { NextMaintenancesComponent } from "./next-maintenances/next-maintenances.component";

import { ProfileAdditionalInfoTabComponent } from "./profile-additional-info-tab/profile-additional-info-tab.component";
import { ProfileMainInfoTabComponent } from "./profile-main-info-tab/profile-main-info-tab.component";

export const components: any[] = [
  CarInfoPaneComponent,
  ClientDataSheetComponent,
  ClientInfoPaneComponent,
  MaintenanceHistoryComponent,
  MaintenanceRecommendsComponent,
  NextMaintenancesComponent,

  ProfileAdditionalInfoTabComponent,
  ProfileMainInfoTabComponent
];

export * from "./car-info-pane/car-info-pane.component";
export * from "./client-info-pane/client-info-pane.component";
export * from "./client-data-sheet/client-data-sheet.component";
export * from "./next-maintenances/next-maintenances.component";
export * from "./maintenance-history/maintenance-history.component";
export * from "./maintenance-recommends/maintenance-recommends.component";

export * from "./profile-main-info-tab/profile-main-info-tab.component";
export * from "./profile-additional-info-tab/profile-additional-info-tab.component";
