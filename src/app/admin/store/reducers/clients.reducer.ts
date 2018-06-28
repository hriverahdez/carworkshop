import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as fromClients from "../actions/clients.actions";
import { Client } from "../../models/client.model";

export interface State extends EntityState<Client> {
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: ""
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

    default: {
      return state;
    }
  }
}

export const selectClientsLoaded = (state: State) => state.loaded;

export const {
  selectIds: selectClientIds,

  selectEntities: selectClientEntities,

  selectAll: selectAllClients,

  selectTotal: selectClientTotal
} = adapter.getSelectors();
