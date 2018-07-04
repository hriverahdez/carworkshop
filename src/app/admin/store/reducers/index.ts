import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";

import * as fromAdmin from "./admins.reducer";
import * as fromClient from "./clients.reducer";
import * as fromMaintenance from "./maintenances.reducer";

export interface AdminState {
  admins: fromAdmin.State;
  clients: fromClient.State;
  maintenances: fromMaintenance.State;
}

export const reducers: ActionReducerMap<AdminState> = {
  admins: fromAdmin.reducer,
  clients: fromClient.reducer,
  maintenances: fromMaintenance.reducer
};

export const selectAdminState = createFeatureSelector<AdminState>("adminState");
