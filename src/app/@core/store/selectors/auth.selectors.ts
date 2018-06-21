import { createSelector } from "@ngrx/store";

import * as fromUser from "../reducers/auth.reducer";
import * as fromRoot from "../reducers";
import { AuthUser } from "../../models/auth-user.model";

export const selectIsLoggedIn = createSelector(
  fromRoot.getAuthState,
  fromUser.isLoggedIn
);

export const selectCurrentUser = createSelector(
  fromRoot.getAuthState,
  fromUser.selectCurrentUser
);

export const selectAuthError = createSelector(
  fromRoot.getAuthState,
  fromUser.selectError
);
