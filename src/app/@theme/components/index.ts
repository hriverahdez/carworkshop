import { ButtonWithLoaderComponent } from "./button-with-loader/button-with-loader.component";

import { CarInfoPaneComponent } from "./car-info-pane/car-info-pane.component";
import { CarNameComponent } from "./car-name/car-name.component";
import { ClientDataSheetComponent } from "./client-data-sheet/client-data-sheet.component";
import { ClientInfoPaneComponent } from "./client-info-pane/client-info-pane.component";

import { LoadingBoxComponent } from "./loading-box/loading-box.component";
import { LoaderComponent } from "./loader/loader.component";

import { MaintenanceCategorySelectorComponent } from "./maintenance-category-selector/maintenance-category-selector.component";
import { MaintenanceRecommendsComponent } from "./maintenance-recommends/maintenance-recommends.component";

import { NextMaintenancesListComponent } from "./next-maintenances-list/next-maintenances-list.component";

import { ProfileAdditionalInfoTabComponent } from "./profile-additional-info-tab/profile-additional-info-tab.component";
import { ProfileMainInfoTabComponent } from "./profile-main-info-tab/profile-main-info-tab.component";

import { TabsComponent } from "./tabs/tabs.component";
import { TabComponent } from "./tab/tab.component";
import { FilterableMaintenanceHistoryComponent } from "./filterable-maintenance-history/filterable-maintenance-history.component";

export const components: any[] = [
  ButtonWithLoaderComponent,

  CarInfoPaneComponent,
  CarNameComponent,
  ClientDataSheetComponent,
  ClientInfoPaneComponent,

  FilterableMaintenanceHistoryComponent,

  LoadingBoxComponent,
  LoaderComponent,

  MaintenanceCategorySelectorComponent,
  MaintenanceRecommendsComponent,

  NextMaintenancesListComponent,

  ProfileAdditionalInfoTabComponent,
  ProfileMainInfoTabComponent,

  TabsComponent,
  TabComponent
];

export * from "./button-with-loader/button-with-loader.component";

export * from "./car-info-pane/car-info-pane.component";
export * from "./car-name/car-name.component";
export * from "./client-info-pane/client-info-pane.component";
export * from "./client-data-sheet/client-data-sheet.component";

export * from "./filterable-maintenance-history/filterable-maintenance-history.component";

export * from "./loading-box/loading-box.component";
export * from "./loader/loader.component";
export * from "./maintenance-category-selector/maintenance-category-selector.component";

export * from "./maintenance-recommends/maintenance-recommends.component";

export * from "./next-maintenances-list/next-maintenances-list.component";

export * from "./profile-main-info-tab/profile-main-info-tab.component";
export * from "./profile-additional-info-tab/profile-additional-info-tab.component";

export * from "./tabs/tabs.component";
export * from "./tab/tab.component";
