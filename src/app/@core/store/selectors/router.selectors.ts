import { createSelector } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";

import * as fromFeature from "../reducers";

export const selectRouterState = createSelector(
  fromFeature.getRouterState,
  router => router.state
);

export const getCurrentUrl = createSelector(
  selectRouterState,
  (state: fromFeature.RouterStateUrl) => state && state.url
);
