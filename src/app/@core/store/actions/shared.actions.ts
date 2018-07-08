import { Action } from "@ngrx/store";
import { Client } from "../../../@core/models/client.model";
import { MaintenanceCategory } from "../../models/maintenance-category.model";

// SET ACTIVE CLIENT
export const SET_ACTIVE_CLIENT = "[Admin] Set Active Client";

export class SetActiveClient implements Action {
  readonly type = SET_ACTIVE_CLIENT;
  constructor(public payload: Client) {}
}

export const CLEAR_ACTIVE_CLIENT = "[Admin] Clear Active Client";

export class ClearActiveClient implements Action {
  readonly type = CLEAR_ACTIVE_CLIENT;
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

export type SharedActions =
  | SetActiveClient
  | ClearActiveClient
  | LoadMaintenanceCategories
  | LoadMaintenanceCategoriesFail
  | LoadMaintenanceCategoriesSuccess;
