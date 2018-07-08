import { CarInfoPaneComponent } from "./car-info-pane/car-info-pane.component";
import { ClientDataSheetComponent } from "./client-data-sheet/client-data-sheet.component";
import { ClientInfoPaneComponent } from "./client-info-pane/client-info-pane.component";

import { LoadingBoxComponent } from "./loading-box/loading-box.component";
import { LoaderComponent } from "./loader/loader.component";

import { MaintenanceCategorySelectorComponent } from "./maintenance-category-selector/maintenance-category-selector.component";
import { MaintenanceHistoryComponent } from "./maintenance-history/maintenance-history.component";
import { MaintenanceRecommendsComponent } from "./maintenance-recommends/maintenance-recommends.component";

import { NextMaintenancesListComponent } from "./next-maintenances-list/next-maintenances-list.component";

import { ProfileAdditionalInfoTabComponent } from "./profile-additional-info-tab/profile-additional-info-tab.component";
import { ProfileMainInfoTabComponent } from "./profile-main-info-tab/profile-main-info-tab.component";

import { TabsComponent } from "./tabs/tabs.component";
import { TabComponent } from "./tab/tab.component";
import { CarNameComponent } from "./car-name/car-name.component";

export const components: any[] = [
  CarInfoPaneComponent,
  CarNameComponent,
  ClientDataSheetComponent,
  ClientInfoPaneComponent,

  LoadingBoxComponent,
  LoaderComponent,
  MaintenanceCategorySelectorComponent,

  MaintenanceHistoryComponent,
  MaintenanceRecommendsComponent,
  NextMaintenancesListComponent,

  ProfileAdditionalInfoTabComponent,
  ProfileMainInfoTabComponent,

  TabsComponent,
  TabComponent
];

export * from "./car-info-pane/car-info-pane.component";
export * from "./car-name/car-name.component";
export * from "./client-info-pane/client-info-pane.component";
export * from "./client-data-sheet/client-data-sheet.component";

export * from "./loading-box/loading-box.component";
export * from "./loader/loader.component";
export * from "./maintenance-category-selector/maintenance-category-selector.component";

export * from "./maintenance-history/maintenance-history.component";
export * from "./maintenance-recommends/maintenance-recommends.component";

export * from "./next-maintenances-list/next-maintenances-list.component";

export * from "./profile-main-info-tab/profile-main-info-tab.component";
export * from "./profile-additional-info-tab/profile-additional-info-tab.component";

export * from "./tabs/tabs.component";
export * from "./tab/tab.component";
