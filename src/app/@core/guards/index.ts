import { AuthGuard } from "./auth.guard";
import { SessionNotExpiredGuard } from "./session-not-expired.guard";

export const guards: any[] = [AuthGuard, SessionNotExpiredGuard];

export * from "./auth.guard";
export * from "./session-not-expired.guard";
