import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromClient from "../reducers/client.reducer";

export const getState = createSelector(
  fromFeature.selectClientsState,
  (state: fromFeature.ClientState) => state.client
);

export const selectClientData = createSelector(
  getState,
  fromClient.selectClient
);

export const selectClientMaintenances = createSelector(
  selectClientData,
  client => {
    return client && client.car ? client.car.maintenances : [];
  }
);
