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

// Password recovery
export const REQUEST_PASSWORD_RECOVERY_EMAIL =
  "[Core] Request Password Recovery Email";
export const REQUEST_PASSWORD_RECOVERY_EMAIL_FAIL =
  "[Core] Request Password Recovery Email Fail";
export const REQUEST_PASSWORD_RECOVERY_EMAIL_SUCCESS =
  "[Core] Request Password Recovery Email Success";

export const CLEAR_REQUEST_PASSWORD_RECOVERY_STATUS =
  "[Core] Clear Request Password Recovery Status";

export class RequestPasswordRecoveryEmail implements Action {
  readonly type = REQUEST_PASSWORD_RECOVERY_EMAIL;
  constructor(public payload: { email: string }) {}
}

export class RequestPasswordRecoveryEmailFail implements Action {
  readonly type = REQUEST_PASSWORD_RECOVERY_EMAIL_FAIL;
  constructor(public payload: { success: boolean; error: string }) {}
}

export class RequestPasswordRecoveryEmailSuccess implements Action {
  readonly type = REQUEST_PASSWORD_RECOVERY_EMAIL_SUCCESS;
  constructor(public payload: { success: boolean; message: string }) {}
}

export class ClearRequestPasswordRecoveryStatus implements Action {
  readonly type = CLEAR_REQUEST_PASSWORD_RECOVERY_STATUS;
}

export const RESET_LOST_PASSWORD = "[Core] Reset Lost Password";
export const RESET_LOST_PASSWORD_FAIL = "[Core] Reset Lost Password Fail";
export const RESET_LOST_PASSWORD_SUCCESS = "[Core] Reset Lost Password Success";

export class ResetLostPassword implements Action {
  readonly type = RESET_LOST_PASSWORD;
  constructor(
    public payload: { token: string; email: string; password: string }
  ) {}
}

export class ResetLostPasswordFail implements Action {
  readonly type = RESET_LOST_PASSWORD_FAIL;
  constructor(public payload: { success: boolean; error: string }) {}
}

export class ResetLostPasswordSuccess implements Action {
  readonly type = RESET_LOST_PASSWORD_SUCCESS;
  constructor(public payload: { success: boolean; message: string }) {}
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
  | UpdateUserProfileSuccess
  | RequestPasswordRecoveryEmail
  | RequestPasswordRecoveryEmailFail
  | RequestPasswordRecoveryEmailSuccess
  | ClearRequestPasswordRecoveryStatus
  | ResetLostPassword
  | ResetLostPasswordFail
  | ResetLostPasswordSuccess;
