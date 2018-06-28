import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromClient from "../reducers/client.reducer";

export const selectCurrentClientData = createSelector(
  fromFeature.selectClientsState,
  (state: fromFeature.ClientState) => state.currentClientData
);

export const selectClientData = createSelector(
  selectCurrentClientData,
  fromClient.selectClient
);

export const selectClientMaintenances = createSelector(
  selectClientData,
  client => {
    return client && client.car ? client.car.maintenances : [];
  }
);

export const selectActiveCategories = createSelector(
  selectCurrentClientData,
  fromClient.selectActiveCategories
);
