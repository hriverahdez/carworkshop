import { Action } from "@ngrx/store";
import { Maintenance } from "../../models/maintenance.model";
import { Client } from "../../models/client.model";
import { Observable } from "rxjs";

// LOAD
export const LOAD_CLIENT_MAINTENANCES = "[Admin] Load Client Maintenances";
export const LOAD_CLIENT_MAINTENANCES_FAIL =
  "[Admin] Load Client Maintenances Fail";
export const LOAD_CLIENT_MAINTENANCES_SUCCESS =
  "[Admin] Load Client Maintenances Success";

export class LoadClientMaintenances implements Action {
  readonly type = LOAD_CLIENT_MAINTENANCES;
  constructor(public payload: Client | Observable<Client>) {}
}

export class LoadClientMaintenancesFail implements Action {
  readonly type = LOAD_CLIENT_MAINTENANCES_FAIL;
  constructor(public payload: any) {}
}

export class LoadClientMaintenancesSuccess implements Action {
  readonly type = LOAD_CLIENT_MAINTENANCES_SUCCESS;
  constructor(public payload: Maintenance[]) {}
}

export type MaintenanceActions =
  | LoadClientMaintenances
  | LoadClientMaintenancesFail
  | LoadClientMaintenancesSuccess;
