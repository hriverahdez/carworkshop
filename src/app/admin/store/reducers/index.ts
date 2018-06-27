import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";

import * as fromClient from "./clients.reducer";
import * as fromMaintenance from "./maintenances.reducer";

export interface AdminState {
  clients: fromClient.State;
  maintenances: fromMaintenance.State;
}

export const reducers: ActionReducerMap<AdminState> = {
  clients: fromClient.reducer,
  maintenances: fromMaintenance.reducer
};

export const selectClientsState = createFeatureSelector<AdminState>(
  "adminState"
);
