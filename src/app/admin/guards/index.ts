import { ClientExistsGuard } from "./client-exists.guard";
import { MaintenanceCategoriesExistGuard } from "./maintenance-categories-exist.guard";
import { MaintenanceExistsGuard } from "./maintenance-exists.guard";

export const guards: any[] = [
  ClientExistsGuard,
  MaintenanceCategoriesExistGuard,
  MaintenanceExistsGuard
];

export * from "./client-exists.guard";
export * from "./maintenance-categories-exist.guard";
export * from "./maintenance-exists.guard";
