import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as fromAdmins from "../actions/admins.actions";
import { AuthUser } from "../../../@shared/models/auth-user.model";

export interface State extends EntityState<AuthUser> {
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<AuthUser> = createEntityAdapter<AuthUser>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: ""
});

export function reducer(state = initialState, action: fromAdmins.AdminActions) {
  switch (action.type) {
    case fromAdmins.DELETE_ADMIN:
    case fromAdmins.ADD_ADMIN:
    case fromAdmins.LOAD_ADMINS: {
      return { ...state, loading: true };
    }

    case fromAdmins.DELETE_ADMIN_FAIL:
    case fromAdmins.ADD_ADMIN_FAIL:
    case fromAdmins.LOAD_ADMINS_FAIL: {
      const error = action.payload;
      return { ...state, error };
    }

    case fromAdmins.LOAD_ADMINS_SUCCESS: {
      const clients = action.payload;
      return adapter.addAll(clients, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case fromAdmins.ADD_ADMIN_SUCCESS: {
      const newAdmin = action.payload;
      return adapter.addOne(newAdmin, { ...state, loading: false });
    }

    case fromAdmins.DELETE_ADMIN_SUCCESS: {
      const deletedAdmin = action.payload;
      return adapter.removeOne(deletedAdmin.id, state);
    }

    default: {
      return state;
    }
  }
}

export const selectAdminsLoaded = (state: State) => state.loaded;

export const {
  selectIds: selectAdminIds,

  selectEntities: selectAdminEntities,

  selectAll: selectAllAdmins,

  selectTotal: selectAdminTotal
} = adapter.getSelectors();
