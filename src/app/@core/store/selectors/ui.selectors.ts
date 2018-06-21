import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromUI from "../reducers/ui.reducers";

export const getAppIsLoading = createSelector(
  fromFeature.getUIState,
  fromUI.selectAppIsLoading
);

export const selectBreadcrumbs = createSelector(
  fromFeature.getUIState,
  fromUI.selectBreadcrumbs
);
