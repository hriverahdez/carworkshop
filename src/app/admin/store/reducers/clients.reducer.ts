import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as fromClients from "../actions/clients.actions";
import { Client } from "../../../@core/models/client.model";
import { Pagination } from "../../../@core/models/pagination.model";

export interface State extends EntityState<Client> {
  loaded: boolean;
  loading: boolean;
  error: any;
  pagination: Pagination;
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: "",
  pagination: { activePage: 1, pageSize: 15 }
});

export function reducer(
  state = initialState,
  action: fromClients.ClientActions
) {
  switch (action.type) {
    case fromClients.DELETE_CLIENT:
    case fromClients.UPDATE_CLIENT:
    case fromClients.ADD_CLIENT:
    case fromClients.LOAD_CLIENTS: {
      return { ...state, loading: true };
    }

    case fromClients.DELETE_CLIENT_FAIL:
    case fromClients.UPDATE_CLIENT_FAIL:
    case fromClients.ADD_CLIENT_FAIL:
    case fromClients.LOAD_CLIENTS_FAIL: {
      const error = action.payload;
      return { ...state, error };
    }

    case fromClients.LOAD_CLIENTS_SUCCESS: {
      const clients = action.payload;
      return adapter.addAll(clients, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case fromClients.ADD_CLIENT_SUCCESS: {
      const newClient = action.payload;
      return adapter.addOne(newClient, { ...state, loading: false });
    }

    case fromClients.UPDATE_CLIENT_SUCCESS: {
      const client = action.payload;
      return adapter.updateOne(
        { id: client.id, changes: client },
        { ...state, loading: false }
      );
    }

    case fromClients.DELETE_CLIENT_SUCCESS: {
      const deletedClient = action.payload;
      return adapter.removeOne(deletedClient.id, state);
    }

    case fromClients.CHANGE_PAGE: {
      const pagination = action.payload;
      return {
        ...state,
        pagination
      };
    }

    case fromClients.CHANGE_PAGE_SIZE: {
      const pageSize = action.payload;
      const pagination: Pagination = { ...state.pagination, pageSize };
      return {
        ...state,
        pagination
      };
    }

    default: {
      return state;
    }
  }
}

export const selectClientsLoaded = (state: State) => state.loaded;
export const selectClientsPagination = (state: State) => state.pagination;

export const {
  selectIds: selectClientIds,

  selectEntities: selectClientEntities,

  selectAll: selectAllClients,

  selectTotal: selectClientTotal
} = adapter.getSelectors();
