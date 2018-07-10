import { AdminGuard } from "./admin.guard";
import { AuthGuard } from "./auth.guard";
import { ClientGuard } from "./client.guard";

import { SessionNotExpiredGuard } from "./session-not-expired.guard";
import { MaintenanceCategoriesExistGuard } from "./maintenance-categories-exist.guard";

export const guards: any[] = [
  AdminGuard,
  AuthGuard,
  ClientGuard,
  MaintenanceCategoriesExistGuard,
  SessionNotExpiredGuard
];

export * from "./admin.guard";
export * from "./auth.guard";
export * from "./client.guard";
export * from "./maintenance-categories-exist.guard";
export * from "./session-not-expired.guard";
