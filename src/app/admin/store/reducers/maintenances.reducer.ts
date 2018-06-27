import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as fromMaintenances from "../actions/maintenances.actions";
import { Maintenance } from "../../models/maintenance.model";

export interface State extends EntityState<Maintenance> {
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Maintenance> = createEntityAdapter<
  Maintenance
>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: ""
});

export function reducer(
  state = initialState,
  action: fromMaintenances.MaintenanceActions
) {
  switch (action.type) {
    case fromMaintenances.LOAD_CLIENT_MAINTENANCES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromMaintenances.LOAD_CLIENT_MAINTENANCES_SUCCESS: {
      const maintenances = action.payload;
      return adapter.addAll(maintenances, { ...state, loading: false });
    }

    default: {
      return state;
    }
  }
}

export const selectMaintenancesLoaded = (state: State) => state.loaded;

export const {
  selectIds: selectMaintenanceIds,

  selectEntities: selectMaintenanceEntities,

  selectAll: selectAllMaintenances,

  selectTotal: selectMaintenanceTotal
} = adapter.getSelectors();
