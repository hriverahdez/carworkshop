import { ClientsService } from "./clients.service";
import { MaintenancesHelperService } from "./maintenances-helper.service";
import { MaintenancesService } from "./maintenances.service";

export const services: any[] = [
  ClientsService,
  MaintenancesHelperService,
  MaintenancesService
];

export * from "./clients.service";
export * from "./maintenances-helper.service";
export * from "./maintenances.service";
