import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromShared from "../reducers/shared.reducer";
import { Client } from "../../models/client.model";

export const selectActiveClient = createSelector(
  fromFeature.getSharedState,
  fromShared.selectActiveClient
);

export const selectActiveClientLoaded = createSelector(
  fromFeature.getSharedState,
  fromShared.selectActiveClientLoaded
);

export const selectActiveClientCar = createSelector(
  selectActiveClient,
  (client: Client) => client.car
);
