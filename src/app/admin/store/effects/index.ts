import { ClientsEffects } from "./clients.effects";
import { MaintenancesEffects } from "./maintenances.effects";

export const effects: any[] = [ClientsEffects, MaintenancesEffects];

export * from "./clients.effects";
export * from "./maintenances.effects";
