import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as fromMaintenances from "../actions/maintenances.actions";
import { Maintenance } from "../../models/maintenance.model";
import { MaintenanceCategory } from "../../models/maintenance-category.model";

export interface State extends EntityState<Maintenance> {
  loaded: boolean;
  loading: boolean;
  error: any;
  categories: MaintenanceCategory[];
  categoriesLoaded: boolean;
}

export const adapter: EntityAdapter<Maintenance> = createEntityAdapter<
  Maintenance
>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: "",
  categories: [],
  categoriesLoaded: false
});

export function reducer(
  state = initialState,
  action: fromMaintenances.MaintenanceActions
) {
  switch (action.type) {
    case fromMaintenances.DELETE_MAINTENANCE_FAIL:
    case fromMaintenances.UPDATE_MAINTENANCE_FAIL:
    case fromMaintenances.ADD_MAINTENANCE_FAIL:
    case fromMaintenances.LOAD_MAINTENANCE_CATEGORIES_FAIL:
    case fromMaintenances.LOAD_CLIENT_MAINTENANCES_FAIL: {
      const error = action.payload;
      return {
        ...state,
        error,
        loading: false
      };
    }

    // case fromMaintenances.LOAD_MAINTENANCE_CATEGORIES:
    case fromMaintenances.DELETE_MAINTENANCE:
    case fromMaintenances.UPDATE_MAINTENANCE:
    case fromMaintenances.ADD_MAINTENANCE:
    case fromMaintenances.LOAD_CLIENT_MAINTENANCES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromMaintenances.LOAD_CLIENT_MAINTENANCES_SUCCESS: {
      const maintenances = action.payload;

      return adapter.addMany(maintenances, { ...state, loading: false });
    }

    case fromMaintenances.LOAD_MAINTENANCE_CATEGORIES_SUCCESS: {
      const categories = action.payload;
      return { ...state, categories, categoriesLoaded: true };
    }

    case fromMaintenances.ADD_MAINTENANCE_SUCCESS: {
      const newMaintenance = action.payload;
      return adapter.addOne(newMaintenance, { ...state, loading: false });
    }

    case fromMaintenances.UPDATE_MAINTENANCE_SUCCESS: {
      const updatedMaintenance = action.payload;
      return adapter.updateOne(
        { id: updatedMaintenance.id, changes: updatedMaintenance },
        { ...state, loading: false }
      );
    }

    case fromMaintenances.DELETE_MAINTENANCE_SUCCESS: {
      const deletedMaintenance = action.payload;
      return adapter.removeOne(deletedMaintenance.id, state);
    }

    default: {
      return state;
    }
  }
}

export const selectMaintenancesLoaded = (state: State) => state.loaded;
export const selectMaintenanceCategories = (state: State) => state.categories;
export const selectMaintenanceCategoriesLoaded = (state: State) =>
  state.categoriesLoaded;

export const {
  selectIds: selectMaintenanceIds,

  selectEntities: selectMaintenanceEntities,

  selectAll: selectAllMaintenances,

  selectTotal: selectMaintenanceTotal
} = adapter.getSelectors();
