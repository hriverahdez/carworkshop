import * as fromClient from "./client.reducer";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface ClientState {
  currentClientData: fromClient.State;
}

export const reducers: ActionReducerMap<ClientState> = {
  currentClientData: fromClient.reducer
};

export const selectClientsState = createFeatureSelector<ClientState>(
  "clientState"
);
