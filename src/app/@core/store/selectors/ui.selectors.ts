import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromUI from "../reducers/ui.reducers";

export const selectAppIsLoadingFull = createSelector(
  fromFeature.getUIState,
  fromUI.selectAppIsLoadingFull
);

export const selectAppIsLoadingBox = createSelector(
  fromFeature.getUIState,
  fromUI.selectAppIsLoadingBox
);

export const selectBreadcrumbs = createSelector(
  fromFeature.getUIState,
  fromUI.selectBreadcrumbs
);

export const selectClientsViewType = createSelector(
  fromFeature.getUIState,
  fromUI.selectClientViewType
);
