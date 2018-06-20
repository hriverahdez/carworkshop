import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";

import * as fromClient from "./clients.reducer";

export interface ClientsState {
  clients: fromClient.State;
}

export const reducers: ActionReducerMap<ClientsState> = {
  clients: fromClient.reducer
};

export const selectClientsState = createFeatureSelector<ClientsState>(
  "clients"
);
