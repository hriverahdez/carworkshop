import { createSelector } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";

import * as fromFeature from "../reducers";

// export const getRouterState = createSelector(
//   fromFeature.getAppState,
//   (state: fromFeature.AppState) => state.router.state
// );

// export const getCurrentUrl = createSelector(
//   getRouterState,
//   (state: fromFeature.RouterStateUrl) => state && state.url
// );
