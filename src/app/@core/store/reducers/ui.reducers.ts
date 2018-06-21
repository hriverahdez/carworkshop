import * as fromUI from "../actions/ui.actions";
import { BreadCrumb } from "../../models/breadcrumb.model";

export interface State {
  isLoading: boolean;
  breadcrumbs: BreadCrumb[];
}

export const initialState: State = {
  isLoading: false,
  breadcrumbs: []
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
  }
  return state;
}

export const selectAppIsLoading = (state: State) => state.isLoading;
export const selectBreadcrumbs = (state: State) => state.breadcrumbs;
