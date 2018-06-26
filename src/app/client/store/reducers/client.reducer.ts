import * as fromClient from "../actions/client.actions";
import { Client } from "../../../admin/models/client.model";

export interface State {
  client: Client;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  client: {},
  loaded: false,
  loading: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: fromClient.ClientActions
) {
  switch (action.type) {
    case fromClient.LOAD_CLIENT_DATA: {
      return {
        ...state,
        loading: true
      };
    }

    case fromClient.LOAD_CLIENT_DATA_FAIL: {
      const error = action.payload;

      return {
        ...state,
        loading: false,
        error
      };
    }

    case fromClient.LOAD_CLIENT_DATA_SUCCESS: {
      const client = action.payload;
      return {
        ...state,
        client,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}

export const selectClient = (state: State) => state.client;
export const selectClientLoaded = (state: State) => state.client;
