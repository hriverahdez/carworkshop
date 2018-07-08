import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../@core/store/reducers";
import * as fromFeature from "../reducers";
import * as fromAdmin from "../reducers/admins.reducer";
import { AuthUser } from "../../../@shared/models/auth-user.model";

export const getAdmins = createSelector(
  fromFeature.selectAdminState,
  (state: fromFeature.AdminState) => state.admins
);

export const selectAdminEntities = createSelector(
  getAdmins,
  fromAdmin.selectAdminEntities
);

export const selectAdminIds = createSelector(
  getAdmins,
  fromAdmin.selectAdminIds
);

export const selectAllAdmins = createSelector(
  getAdmins,
  fromAdmin.selectAllAdmins
);

export const selectAdminTotal = createSelector(
  getAdmins,
  fromAdmin.selectAdminTotal
);

export const selectAdminsLoaded = createSelector(
  getAdmins,
  fromAdmin.selectAdminsLoaded
);

export const selectCurrentAdmin = createSelector(
  selectAdminEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.adminId];
  }
);

// export const selectActiveClient = createSelector(
//   getAdmins,
//   fromAdmin.selectActiveClient
// );
