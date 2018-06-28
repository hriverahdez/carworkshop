import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromFeature from "../reducers";
import * as fromMaintenance from "../reducers/maintenances.reducer";

export const getMaintenancesState = createSelector(
  fromFeature.selectClientsState,
  (state: fromFeature.AdminState) => state.maintenances
);

export const selectMaintenanceEntities = createSelector(
  getMaintenancesState,
  fromMaintenance.selectMaintenanceEntities
);

export const selectMaintenanceIds = createSelector(
  getMaintenancesState,
  fromMaintenance.selectMaintenanceIds
);

export const selectAllMaintenances = createSelector(
  getMaintenancesState,
  fromMaintenance.selectAllMaintenances
);

export const selectMaintenanceTotal = createSelector(
  getMaintenancesState,
  fromMaintenance.selectMaintenanceTotal
);

export const selectMaintenancesLoaded = createSelector(
  getMaintenancesState,
  fromMaintenance.selectMaintenancesLoaded
);

export const selectMaintenanceCategories = createSelector(
  getMaintenancesState,
  fromMaintenance.selectMaintenanceCategories
);

export const selectMaintenanceCategoriesLoaded = createSelector(
  getMaintenancesState,
  fromMaintenance.selectMaintenanceCategoriesLoaded
);

export const selectCurrentMaintenance = createSelector(
  selectMaintenanceEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.maintenanceId];
  }
);
