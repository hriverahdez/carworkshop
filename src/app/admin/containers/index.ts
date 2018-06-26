import { ClientDetailsComponent } from "./client-details/client-details.component";
import { ClientItemComponent } from "./client-item/client-item.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientsViewSelectorComponent } from "./clients-view-selector/clients-view-selector.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { FilteredSearchComponent } from "./filtered-search/filtered-search.component";

export const containers: any[] = [
  ClientDetailsComponent,
  ClientItemComponent,
  ClientListComponent,
  ClientsViewSelectorComponent,
  DashboardComponent,
  FilteredSearchComponent
];

export * from "./client-details/client-details.component";
export * from "./client-item/client-item.component";
export * from "./client-list/client-list.component";
export * from "./clients-view-selector/clients-view-selector.component";
export * from "./dashboard/dashboard.component";
export * from "./filtered-search/filtered-search.component";
