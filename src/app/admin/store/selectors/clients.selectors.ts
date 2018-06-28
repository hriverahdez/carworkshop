import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromFeature from "../reducers";
import * as fromClient from "../reducers/clients.reducer";
import { Client } from "../../models/client.model";

export const getClientsState = createSelector(
  fromFeature.selectClientsState,
  (state: fromFeature.AdminState) => state.clients
);

export const selectClientEntities = createSelector(
  getClientsState,
  fromClient.selectClientEntities
);

export const selectClientIds = createSelector(
  getClientsState,
  fromClient.selectClientIds
);

export const selectAllClients = createSelector(
  getClientsState,
  fromClient.selectAllClients
);

export const selectClientTotal = createSelector(
  getClientsState,
  fromClient.selectClientTotal
);

export const selectClientsLoaded = createSelector(
  getClientsState,
  fromClient.selectClientsLoaded
);

export const selectCurrentClient = createSelector(
  selectClientEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.clientId];
  }
);

export const selectActiveClient = createSelector(
  getClientsState,
  fromClient.selectActiveClient
);

export const selectCurrentClientName = createSelector(
  selectClientEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.clientId].firstName;
  }
);
