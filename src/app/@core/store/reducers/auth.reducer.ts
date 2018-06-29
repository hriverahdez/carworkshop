import * as fromUser from "../actions";
import { AuthUser } from "../../../@shared/models/auth-user.model";

import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

export interface AuthState {
  isLoggedIn: boolean;
  currentUser: AuthUser;
  error: CustomError;
  loading: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: {},
  error: {},
  loading: false
};

export function reducer(state = initialState, action: fromUser.AuthActions) {
  switch (action.type) {
    case fromUser.REGISTER:
    case fromUser.LOGIN: {
      return {
        ...state,
        loading: true
      };
    }

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
  }

  return state;
}

export const isLoggedIn = (state: AuthState) => state.isLoggedIn;
export const selectCurrentUser = (state: AuthState) => state.currentUser;
export const selectError = (state: AuthState) => state.error;
export const selectAuthLoading = (state: AuthState) => state.loading;
