import * as fromClient from "./client.reducer";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface ClientState {
  client: fromClient.State;
}

export const reducers: ActionReducerMap<ClientState> = {
  client: fromClient.reducer
};

export const selectClientsState = createFeatureSelector<ClientState>("client");
