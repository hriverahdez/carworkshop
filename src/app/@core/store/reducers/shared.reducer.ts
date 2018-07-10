import * as sharedActions from "../actions/shared.actions";
import * as fromClient from "../../../client/store/actions/client.actions";
import { Client } from "../../../@core/models/client.model";
import { MaintenanceCategory } from "../../models/maintenance-category.model";

export interface State {
  client: Client;
  loaded: boolean;
  loading: boolean;
  categories: MaintenanceCategory[];
  categoriesLoaded: boolean;
}

export const initialState: State = {
  client: {},
  loaded: false,
  loading: false,
  categories: [],
  categoriesLoaded: false
};

export function reducer(
  state = initialState,
  action: sharedActions.SharedActions | fromClient.ClientActions
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

    case fromClient.UPDATE_PROFILE_SUCCESS: {
      const updatedProfile = action.payload;
      const client: Client = {
        ...state.client,
        email: updatedProfile.email,
        firstName: updatedProfile.firstName,
        lastName: updatedProfile.lastName
      };

      return {
        ...state,
        client
      };
    }

    case sharedActions.LOAD_MAINTENANCE_CATEGORIES_SUCCESS: {
      const categories = action.payload;
      return { ...state, categories, categoriesLoaded: true };
    }

    case sharedActions.DOWNLOAD_CLIENT_DATASHEET: {
      return {
        ...state,
        loading: true
      };
    }

    case sharedActions.DOWNLOAD_CLIENT_DATASHEET_FAIL:
    case sharedActions.DOWNLOAD_CLIENT_DATASHEET_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}

export const selectActiveClient = (state: State) => state.client;
export const selectActiveClientLoaded = (state: State) => state.loaded;
export const selectMaintenanceCategories = (state: State) => state.categories;
export const selectMaintenanceCategoriesLoaded = (state: State) =>
  state.categoriesLoaded;

export const selectSharedStateLoading = (state: State) => state.loading;
