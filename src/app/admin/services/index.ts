import { ClientsService } from "./clients.service";
import { MaintenancesService } from "./maintenances.service";

export const services: any[] = [ClientsService, MaintenancesService];

export * from "./clients.service";
export * from "./maintenances.service";
