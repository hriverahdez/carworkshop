import { Action } from "@ngrx/store";
import { AuthUser } from "../../../@shared/models/auth-user.model";

// Login
export const LOGIN = "[Core] Log in";
export const LOGIN_FAIL = "[Core] Log in Fail";
export const LOGIN_SUCCESS = "[Core] Log in Success";

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: AuthUser) {}
}

// Register
export const REGISTER = "[Core] Register";
export const REGISTER_FAIL = "[Core] Register Fail";
export const REGISTER_SUCCESS = "[Core] Register Success";

export class Register implements Action {
  readonly type = REGISTER;
  constructor(public payload: AuthUser) {}
}

export class RegisterFail implements Action {
  readonly type = REGISTER_FAIL;
  constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public payload: AuthUser) {}
}

// Update Profile
export const UPDATE_USER_PROFILE = "[Core] Update User Profile";
export const UPDATE_USER_PROFILE_FAIL = "[Core] Update User Profile Fail";
export const UPDATE_USER_PROFILE_SUCCESS = "[Core] Update User Profile Success";

export class UpdateUserProfile implements Action {
  readonly type = UPDATE_USER_PROFILE;
  constructor(public payload: AuthUser) {}
}

export class UpdateUserProfileFail implements Action {
  readonly type = UPDATE_USER_PROFILE_FAIL;
  constructor(public payload: any) {}
}

export class UpdateUserProfileSuccess implements Action {
  readonly type = UPDATE_USER_PROFILE_SUCCESS;
  constructor(public payload: AuthUser) {}
}

// Logout
export const LOGOUT = "[Core] Log out";

export class Logout implements Action {
  readonly type = LOGOUT;
}

// Refresh User
export const SET_USER = "[Core] Set User";

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: AuthUser) {}
}

export type AuthActions =
  | Login
  | LoginFail
  | LoginSuccess
  | Register
  | RegisterFail
  | RegisterSuccess
  | Logout
  | SetUser
  | UpdateUserProfile
  | UpdateUserProfileFail
  | UpdateUserProfileSuccess;
