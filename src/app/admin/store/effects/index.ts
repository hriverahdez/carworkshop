import { AdminsEffects } from "./admins.effects";
import { ClientsEffects } from "./clients.effects";
import { MaintenancesEffects } from "./maintenances.effects";

export const effects: any[] = [
  AdminsEffects,
  ClientsEffects,
  MaintenancesEffects
];

export * from "./admins.effects";
export * from "./clients.effects";
export * from "./maintenances.effects";
