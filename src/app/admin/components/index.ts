import { CarFormComponent } from "./car-form/car-form.component";
import { ClientFormComponent } from "./client-form/client-form.component";
import { ClientTableViewComponent } from "./client-table-view/client-table-view.component";
import { ClientTileViewComponent } from "./client-tile-view/client-tile-view.component";

import { MaintenanceFormComponent } from "./maintenance-form/maintenance-form.component";

export const components: any[] = [
  CarFormComponent,
  ClientFormComponent,
  ClientTableViewComponent,
  ClientTileViewComponent,

  MaintenanceFormComponent
];

export * from "./car-form/car-form.component";
export * from "./client-form/client-form.component";
export * from "./client-table-view/client-table-view.component";
export * from "./client-tile-view/client-tile-view.component";

export * from "./maintenance-form/maintenance-form.component";
