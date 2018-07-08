import { createSelector } from "@ngrx/store";

import * as fromUser from "../reducers/auth.reducer";
import * as fromRoot from "../reducers";

export const selectIsLoggedIn = createSelector(
  fromRoot.getAuthState,
  fromUser.isLoggedIn
);

export const selectCurrentUser = createSelector(
  fromRoot.getAuthState,
  fromUser.selectCurrentUser
);

export const selectCurrentUserIsAdmin = createSelector(
  selectCurrentUser,
  user => user && user.role && user.role.name !== "client"
);

export const selectAuthError = createSelector(
  fromRoot.getAuthState,
  fromUser.selectError
);

export const selectAuthLoading = createSelector(
  fromRoot.getAuthState,
  fromUser.selectAuthLoading
);

export const selectPasswordRecoveryMessage = createSelector(
  fromRoot.getAuthState,
  fromUser.selectPasswordRecoveryMessage
);

export const selectPasswordRecoveryError = createSelector(
  fromRoot.getAuthState,
  fromUser.selectPasswordRecoveryError
);
