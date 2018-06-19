import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromFeature from "../reducers";
import * as fromClient from "../reducers/clients.reducer";

export const getState = createSelector(
  fromFeature.selectClientsState,
  (state: fromFeature.ClientsState) => state.clients
);

export const selectClientEntities = createSelector(
  getState,
  fromClient.selectClientEntities
);

export const selectClientIds = createSelector(
  getState,
  fromClient.selectClientIds
);

export const selectAllClients = createSelector(
  getState,
  fromClient.selectAllClients
);

export const selectClientTotal = createSelector(
  getState,
  fromClient.selectClientTotal
);

export const selectClientsLoaded = createSelector(
  getState,
  fromClient.selectClientsLoaded
);

export const selectCurrentClient = createSelector(
  selectClientEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.clientId];
  }
);
