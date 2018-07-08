import * as sharedActions from "../actions/shared.actions";
import { Client } from "../../../@core/models/client.model";

export interface State {
  client: Client;
  loaded: boolean;
  loading: boolean;
  //   activeCategories: MaintenanceCategory[];
}

export const initialState: State = {
  client: {},
  loaded: false,
  loading: false
  // activeCategories: []
};

export function reducer(
  state = initialState,
  action: sharedActions.SharedActions
) {
  switch (action.type) {
    case sharedActions.SET_ACTIVE_CLIENT: {
      const client = action.payload;
      return {
        ...state,
        client,
        loaded: true
      };
    }

    case sharedActions.CLEAR_ACTIVE_CLIENT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const selectActiveClient = (state: State) => state.client;
export const selectActiveClientLoaded = (state: State) => state.loaded;
