import { ClientExistsGuard } from "./client-exists.guard";
import { MaintenanceCategoriesExistGuard } from "./maintenance-categories-exist.guard";

export const guards: any[] = [
  ClientExistsGuard,
  MaintenanceCategoriesExistGuard
];

export * from "./client-exists.guard";
export * from "./maintenance-categories-exist.guard";
