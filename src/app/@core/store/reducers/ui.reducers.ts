import * as fromUI from "../actions/ui.actions";
import { BreadCrumb } from "../../models/breadcrumb.model";
import { ClientsViewTypes } from "../shared/ui-clients-view-types";

export interface State {
  isLoadingFull: boolean;
  isLoadingBox: boolean;
  breadcrumbs: BreadCrumb[];
  clientsView: ClientsViewTypes;
}

export const initialState: State = {
  isLoadingFull: false,
  isLoadingBox: false,
  breadcrumbs: [],
  clientsView: ClientsViewTypes.Tiles
};

export function reducer(state = initialState, action: fromUI.UIActions) {
  switch (action.type) {
    case fromUI.SHOW_FULLSCREEN_LOADER: {
      return {
        ...state,
        isLoadingFull: true
      };
    }

    case fromUI.HIDE_FULLSCREEN_LOADER: {
      return {
        ...state,
        isLoadingFull: false
      };
    }

    case fromUI.SHOW_LOADING_BOX: {
      return {
        ...state,
        isLoadingBox: true
      };
    }

    case fromUI.HIDE_LOADING_BOX: {
      return {
        ...state,
        isLoadingBox: false
      };
    }

    case fromUI.SET_BREADCRUMBS: {
      const breadcrumbs = action.payload;
      return {
        ...state,
        breadcrumbs
      };
    }

    case fromUI.SET_CLIENTS_VIEW_TYPE: {
      const clientsView = action.payload;
      return { ...state, clientsView };
    }
  }
  return state;
}

export const selectAppIsLoadingFull = (state: State) => state.isLoadingFull;
export const selectAppIsLoadingBox = (state: State) => state.isLoadingBox;
export const selectBreadcrumbs = (state: State) => state.breadcrumbs;
export const selectClientViewType = (state: State) => state.clientsView;
