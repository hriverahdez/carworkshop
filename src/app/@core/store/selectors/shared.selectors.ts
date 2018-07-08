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

export const selectActiveClientMaintenances = createSelector(
  selectActiveClient,
  (client: Client) => client && client.car && client.car.maintenances
);

export const selectMaintenanceCategories = createSelector(
  fromFeature.getSharedState,
  fromShared.selectMaintenanceCategories
);

export const selectMaintenanceCategoriesLoaded = createSelector(
  fromFeature.getSharedState,
  fromShared.selectMaintenanceCategoriesLoaded
);
