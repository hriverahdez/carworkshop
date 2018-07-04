import { Action } from "@ngrx/store";
import { AuthUser } from "../../../@shared/models/auth-user.model";

// LOAD

export const LOAD_ADMINS = "[Admin] Load Admins";
export const LOAD_ADMINS_FAIL = "[Admin] Load Admins Fail";
export const LOAD_ADMINS_SUCCESS = "[Admin] Load Admins Success";

export class LoadAdmins implements Action {
  readonly type = LOAD_ADMINS;
}

export class LoadAdminsFail implements Action {
  readonly type = LOAD_ADMINS_FAIL;

  constructor(public payload: any) {}
}

export class LoadAdminsSuccess implements Action {
  readonly type = LOAD_ADMINS_SUCCESS;

  constructor(public payload: AuthUser[]) {}
}

// ADD

export const ADD_ADMIN = "[Admin] Add Admin";
export const ADD_ADMIN_FAIL = "[Admin] Add Admin Fail";
export const ADD_ADMIN_SUCCESS = "[Admin] Add Admin Success";

export class AddAdmin implements Action {
  readonly type = ADD_ADMIN;
  constructor(public payload: AuthUser) {}
}

export class AddAdminFail implements Action {
  readonly type = ADD_ADMIN_FAIL;
  constructor(public payload: any) {}
}

export class AddAdminSuccess implements Action {
  readonly type = ADD_ADMIN_SUCCESS;
  constructor(public payload: AuthUser) {}
}

// UPDATE

// export const UPDATE_CLIENT = "[Admin] Update Client";
// export const UPDATE_CLIENT_FAIL = "[Admin] Update Client Fail";
// export const UPDATE_CLIENT_SUCCESS = "[Admin] Update Client Success";

// export class UpdateClient implements Action {
//   readonly type = UPDATE_CLIENT;
//   constructor(public payload: AuthUser) {}
// }

// export class UpdateClientFail implements Action {
//   readonly type = UPDATE_CLIENT_FAIL;
//   constructor(public payload: any) {}
// }

// export class UpdateClientSuccess implements Action {
//   readonly type = UPDATE_CLIENT_SUCCESS;
//   constructor(public payload: AuthUser) {}
// }

// DELETE
export const DELETE_ADMIN = "[Admin] Delete Admin";
export const DELETE_ADMIN_FAIL = "[Admin] Delete Admin Fail";
export const DELETE_ADMIN_SUCCESS = "[Admin] Delete Admin Success";

export class DeleteAdmin implements Action {
  readonly type = DELETE_ADMIN;
  constructor(public payload: AuthUser) {}
}

export class DeleteAdminFail implements Action {
  readonly type = DELETE_ADMIN_FAIL;
  constructor(public payload: any) {}
}

export class DeleteAdminSuccess implements Action {
  readonly type = DELETE_ADMIN_SUCCESS;
  constructor(public payload: AuthUser) {}
}

export type AdminActions =
  | LoadAdmins
  | LoadAdminsFail
  | LoadAdminsSuccess
  | AddAdmin
  | AddAdminFail
  | AddAdminSuccess
  | DeleteAdmin
  | DeleteAdminFail
  | DeleteAdminSuccess;
