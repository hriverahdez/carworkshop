import { Action } from "@ngrx/store";
import { Maintenance } from "../../models/maintenance.model";
import { Client } from "../../models/client.model";
import { Observable } from "rxjs";
import { MaintenanceCategory } from "../../models/maintenance-category.model";

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

// LOAD CATEGORIES
export const LOAD_MAINTENANCE_CATEGORIES =
  "[Admin] Load Maintenance Categories";
export const LOAD_MAINTENANCE_CATEGORIES_FAIL =
  "[Admin] Load Maintenance Categories Fail";
export const LOAD_MAINTENANCE_CATEGORIES_SUCCESS =
  "[Admin] Load Maintenance Categories Success";

export class LoadMaintenanceCategories implements Action {
  readonly type = LOAD_MAINTENANCE_CATEGORIES;
}

export class LoadMaintenanceCategoriesFail implements Action {
  readonly type = LOAD_MAINTENANCE_CATEGORIES_FAIL;

  constructor(public payload: any) {}
}

export class LoadMaintenanceCategoriesSuccess implements Action {
  readonly type = LOAD_MAINTENANCE_CATEGORIES_SUCCESS;

  constructor(public payload: MaintenanceCategory[]) {}
}

// ADD
export const ADD_MAINTENANCE = "[Admin] Add Maintenance";
export const ADD_MAINTENANCE_FAIL = "[Admin] Add Maintenance Fail";
export const ADD_MAINTENANCE_SUCCESS = "[Admin] Add Maintenance Success";

export class AddMaintenance implements Action {
  readonly type = ADD_MAINTENANCE;
  constructor(public payload: Maintenance) {}
}

export class AddMaintenanceFail implements Action {
  readonly type = ADD_MAINTENANCE_FAIL;
  constructor(public payload: any) {}
}

export class AddMaintenanceSuccess implements Action {
  readonly type = ADD_MAINTENANCE_SUCCESS;
  constructor(public payload: Maintenance) {}
}

export type MaintenanceActions =
  | LoadClientMaintenances
  | LoadClientMaintenancesFail
  | LoadClientMaintenancesSuccess
  | LoadMaintenanceCategories
  | LoadMaintenanceCategoriesFail
  | LoadMaintenanceCategoriesSuccess
  | AddMaintenance
  | AddMaintenanceFail
  | AddMaintenanceSuccess;
