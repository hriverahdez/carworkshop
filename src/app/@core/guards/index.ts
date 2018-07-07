import { AdminGuard } from "./admin.guard";
import { AuthGuard } from "./auth.guard";
import { ClientGuard } from "./client.guard";
import { SessionNotExpiredGuard } from "./session-not-expired.guard";
import { RedirectIfLoggedInGuard } from "./redirect-if-logged-in.guard";

export const guards: any[] = [
  AdminGuard,
  AuthGuard,
  ClientGuard,
  SessionNotExpiredGuard,
  RedirectIfLoggedInGuard
];

export * from "./admin.guard";
export * from "./auth.guard";
export * from "./client.guard";
export * from "./session-not-expired.guard";
export * from "./redirect-if-logged-in.guard";
