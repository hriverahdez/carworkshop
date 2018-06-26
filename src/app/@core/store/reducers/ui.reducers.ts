import * as fromUI from "../actions/ui.actions";
import { BreadCrumb } from "../../models/breadcrumb.model";
import { ClientsViewTypes } from "../shared/ui-clients-view-types";

export interface State {
  isLoading: boolean;
  breadcrumbs: BreadCrumb[];
  clientsView: ClientsViewTypes;
}

export const initialState: State = {
  isLoading: false,
  breadcrumbs: [],
  clientsView: ClientsViewTypes.Tiles
};

export function reducer(state = initialState, action: fromUI.UIActions) {
  switch (action.type) {
    case fromUI.DISPLAY_PROGRESS_BAR: {
      return {
        ...state,
        isLoading: true
      };
    }

    case fromUI.HIDE_PROGRESS_BAR: {
      return {
        ...state,
        isLoading: false
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

export const selectAppIsLoading = (state: State) => state.isLoading;
export const selectBreadcrumbs = (state: State) => state.breadcrumbs;
export const selectClientViewType = (state: State) => state.clientsView;
