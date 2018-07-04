import { AdminProfileComponent } from "./admin-profile/admin-profile.component";
import { AdminListComponent } from "./admin-list/admin-list.component";
import { AdminItemComponent } from "./admin-item/admin-item.component";

import { ClientDetailsComponent } from "./client-details/client-details.component";
import { ClientItemComponent } from "./client-item/client-item.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientsViewSelectorComponent } from "./clients-view-selector/clients-view-selector.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { FilteredSearchComponent } from "./filtered-search/filtered-search.component";

import { MaintenanceItemComponent } from "./maintenance-item/maintenance-item.component";

export const containers: any[] = [
  AdminListComponent,
  AdminProfileComponent,
  AdminItemComponent,
  ClientDetailsComponent,
  ClientItemComponent,
  ClientListComponent,
  ClientsViewSelectorComponent,
  DashboardComponent,
  FilteredSearchComponent,

  MaintenanceItemComponent
];

export * from "./admin-profile/admin-profile.component";
export * from "./admin-list/admin-list.component";
export * from "./admin-item/admin-item.component";

export * from "./client-details/client-details.component";
export * from "./client-item/client-item.component";
export * from "./client-list/client-list.component";
export * from "./clients-view-selector/clients-view-selector.component";
export * from "./dashboard/dashboard.component";
export * from "./filtered-search/filtered-search.component";
export * from "./maintenance-item/maintenance-item.component";
