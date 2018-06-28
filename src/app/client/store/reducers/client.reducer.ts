import * as fromClient from "../actions/client.actions";
import { Client } from "../../../admin/models/client.model";
import { MaintenanceCategory } from "../../../admin/models/maintenance-category.model";

export interface State {
  client: Client;
  loaded: boolean;
  loading: boolean;
  error: any;
  activeCategories: MaintenanceCategory[];
}

export const initialState: State = {
  client: {},
  loaded: false,
  loading: false,
  error: {},
  activeCategories: []
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

    case fromClient.SET_ACTIVE_CATEGORIES: {
      const activeCategories = action.payload;

      return { ...state, activeCategories };
    }

    default: {
      return state;
    }
  }
}

export const selectClient = (state: State) => state.client;
export const selectClientLoaded = (state: State) => state.client;
export const selectActiveCategories = (state: State) => state.activeCategories;
