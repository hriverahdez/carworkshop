import { Action } from "@ngrx/store";
import { Client } from "../../../admin/models/client.model";
import { MaintenanceCategory } from "../../../admin/models/maintenance-category.model";

export const LOAD_CLIENT_DATA = "[Client] Load Client Data";
export const LOAD_CLIENT_DATA_FAIL = "[Client] Load Client Data Fail";
export const LOAD_CLIENT_DATA_SUCCESS = "[Client] Load Client Data Success";

export class LoadClientData implements Action {
  readonly type = LOAD_CLIENT_DATA;
}

export class LoadClientDataFail implements Action {
  readonly type = LOAD_CLIENT_DATA_FAIL;

  constructor(public payload: any) {}
}

export class LoadClientDataSuccess implements Action {
  readonly type = LOAD_CLIENT_DATA_SUCCESS;

  constructor(public payload: Client) {}
}

// SET CATEGORIES
export const SET_ACTIVE_CATEGORIES = "[Client] Set Active Categories";

export class SetActiveCategories implements Action {
  readonly type = SET_ACTIVE_CATEGORIES;
  constructor(public payload: MaintenanceCategory[]) {}
}

export type ClientActions =
  | LoadClientData
  | LoadClientDataFail
  | LoadClientDataSuccess
  | SetActiveCategories;
