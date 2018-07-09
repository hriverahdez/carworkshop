import { ClientExistsGuard } from "./client-exists.guard";
import { MaintenanceExistsGuard } from "./maintenance-exists.guard";

export const guards: any[] = [ClientExistsGuard, MaintenanceExistsGuard];

export * from "./client-exists.guard";
export * from "./maintenance-exists.guard";
