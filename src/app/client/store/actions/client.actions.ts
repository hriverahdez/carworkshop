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

// UPDATE PROFILE
export const UPDATE_PROFILE = "[Client] Update Profile";
export const UPDATE_PROFILE_FAIL = "[Client] Update Profile Fail";
export const UPDATE_PROFILE_SUCCESS = "[Client] Update Profile Success";

export class UpdateProfile implements Action {
  readonly type = UPDATE_PROFILE;
  constructor(public payload: Client) {}
}

export class UpdateProfileFail implements Action {
  readonly type = UPDATE_PROFILE_FAIL;
  constructor(public payload: any) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = UPDATE_PROFILE_SUCCESS;
  constructor(public payload: Client) {}
}

export type ClientActions =
  | LoadClientData
  | LoadClientDataFail
  | LoadClientDataSuccess
  | SetActiveCategories
  | UpdateProfile
  | UpdateProfileFail
  | UpdateProfileSuccess;
