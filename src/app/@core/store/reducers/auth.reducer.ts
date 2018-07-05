import * as fromUser from "../actions";
import * as fromClient from "../../../client/store/actions/client.actions";
import { AuthUser } from "../../../@shared/models/auth-user.model";

import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

export interface AuthState {
  isLoggedIn: boolean;
  currentUser: AuthUser;
  error: CustomError;
  loading: boolean;
  passwordRecoveryMessage: string;
  passwordRecoveryError: string;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: {},
  error: {},
  loading: false,
  passwordRecoveryMessage: "",
  passwordRecoveryError: ""
};

export function reducer(
  state = initialState,
  action: fromUser.AuthActions | fromClient.ClientActions
) {
  switch (action.type) {
    case fromUser.REGISTER:
    case fromUser.LOGIN: {
      return {
        ...state,
        loading: true
      };
    }

    case fromUser.UPDATE_USER_PROFILE_FAIL:
    case fromUser.LOGIN_FAIL: {
      const { status } = action.payload;

      const error: CustomError = {
        code: status,
        message:
          status === 401 || status === 400
            ? "Usuario o contraseña incorrectos"
            : httpErrorMessages[status]
      };

      return {
        ...state,
        loading: false,
        error
      };
    }

    case fromUser.REGISTER_SUCCESS:
    case fromUser.LOGIN_SUCCESS: {
      const currentUser = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        currentUser,
        loading: false
      };
    }

    case fromUser.UPDATE_USER_PROFILE_SUCCESS:
    case fromUser.SET_USER: {
      const currentUser = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        currentUser
      };
    }

    case fromUser.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {}
      };
    }

    case fromClient.UPDATE_PROFILE_SUCCESS: {
      const updatedClient = action.payload;
      const currentUser: AuthUser = {
        ...state.currentUser,
        email: updatedClient.email,
        name: `${updatedClient.firstName} ${updatedClient.lastName}`
      };
      return {
        ...state,
        currentUser
      };
    }

    case fromUser.REQUEST_PASSWORD_RECOVERY_EMAIL: {
      return { ...state, loading: true };
    }

    case fromUser.REQUEST_PASSWORD_RECOVERY_EMAIL_FAIL: {
      const passwordRecoveryError = action.payload.error;
      return { ...state, passwordRecoveryError, loading: false };
    }

    case fromUser.REQUEST_PASSWORD_RECOVERY_EMAIL_SUCCESS: {
      const passwordRecoveryMessage = action.payload.message;
      return { ...state, passwordRecoveryMessage, loading: false };
    }

    case fromUser.CLEAR_REQUEST_PASSWORD_RECOVERY_STATUS: {
      return {
        ...state,
        passwordRecoveryError: "",
        passwordRecoveryMessage: ""
      };
    }
  }

  return state;
}

export const isLoggedIn = (state: AuthState) => state.isLoggedIn;
export const selectCurrentUser = (state: AuthState) => state.currentUser;
export const selectError = (state: AuthState) => state.error;
export const selectAuthLoading = (state: AuthState) => state.loading;

export const selectPasswordRecoveryMessage = (state: AuthState) =>
  state.passwordRecoveryMessage;
export const selectPasswordRecoveryError = (state: AuthState) =>
  state.passwordRecoveryError;
