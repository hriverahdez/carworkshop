import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";

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

// LOAD ALL MAINTENANCES
export const LOAD_ALL_MAINTENANCES = "[Admin] Load All Maintenances";
export const LOAD_ALL_MAINTENANCES_FAIL = "[Admin] Load All Maintenances Fail";
export const LOAD_ALL_MAINTENANCES_SUCCESS =
  "[Admin] Load All Maintenances Success";

export class LoadAllMaintenances implements Action {
  readonly type = LOAD_ALL_MAINTENANCES;
}

export class LoadAllMaintenancesFail implements Action {
  readonly type = LOAD_ALL_MAINTENANCES_FAIL;
  constructor(public payload: any) {}
}

export class LoadAllMaintenancesSuccess implements Action {
  readonly type = LOAD_ALL_MAINTENANCES_SUCCESS;
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

// UPDATE
export const UPDATE_MAINTENANCE = "[Admin] Update Maintenance";
export const UPDATE_MAINTENANCE_FAIL = "[Admin] Update Maintenance Fail";
export const UPDATE_MAINTENANCE_SUCCESS = "[Admin] Update Maintenance Success";

export class UpdateMaintenance implements Action {
  readonly type = UPDATE_MAINTENANCE;
  constructor(public payload: Maintenance) {}
}

export class UpdateMaintenanceFail implements Action {
  readonly type = UPDATE_MAINTENANCE_FAIL;
  constructor(public payload: any) {}
}

export class UpdateMaintenanceSuccess implements Action {
  readonly type = UPDATE_MAINTENANCE_SUCCESS;
  constructor(public payload: Maintenance) {}
}

// DELETE
export const DELETE_MAINTENANCE = "[Admin] Delete Maintenance";
export const DELETE_MAINTENANCE_FAIL = "[Admin] Delete Maintenance Fail";
export const DELETE_MAINTENANCE_SUCCESS = "[Admin] Delete Maintenance Success";

export class DeleteMaintenance implements Action {
  readonly type = DELETE_MAINTENANCE;
  constructor(public payload: Maintenance) {}
}

export class DeleteMaintenanceFail implements Action {
  readonly type = DELETE_MAINTENANCE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteMaintenanceSuccess implements Action {
  readonly type = DELETE_MAINTENANCE_SUCCESS;
  constructor(public payload: Maintenance) {}
}

// export const SET_ACTIVE_CLIENT_MAINTENANCES =
//   "[Admin] Set Active Client Maintenances";

// export class SetActiveClientMaintenances implements Action {
//   readonly type = SET_ACTIVE_CLIENT_MAINTENANCES;
//   constructor(public payload: Client) {}
// }

export type MaintenanceActions =
  | LoadClientMaintenances
  | LoadClientMaintenancesFail
  | LoadClientMaintenancesSuccess
  | LoadAllMaintenances
  | LoadAllMaintenancesFail
  | LoadAllMaintenancesSuccess
  | LoadMaintenanceCategories
  | LoadMaintenanceCategoriesFail
  | LoadMaintenanceCategoriesSuccess
  | AddMaintenance
  | AddMaintenanceFail
  | AddMaintenanceSuccess
  | UpdateMaintenance
  | UpdateMaintenanceFail
  | UpdateMaintenanceSuccess
  | DeleteMaintenance
  | DeleteMaintenanceFail
  | DeleteMaintenanceSuccess;
//   | SetActiveClientMaintenances;
