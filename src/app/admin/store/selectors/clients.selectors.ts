import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../@core/store/reducers/";
import * as fromFeature from "../reducers";
import * as fromClient from "../reducers/clients.reducer";

export const getClientsState = createSelector(
  fromFeature.selectAdminState,
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

export const selectCurrentClientName = createSelector(
  selectClientEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.clientId].firstName;
  }
);

export const selectClientsPagination = createSelector(
  getClientsState,
  fromClient.selectClientsPagination
);

export const selectPaginatedClients = createSelector(
  selectAllClients,
  selectClientsPagination,
  (clients, pagination) => {
    const startItem = (pagination.activePage - 1) * pagination.pageSize;
    const endItem = pagination.activePage * pagination.pageSize;
    return clients.slice(startItem, endItem);
  }
);

export const selectClientsPaginationSize = createSelector(
  selectClientsPagination,
  pagination => pagination.pageSize
);
