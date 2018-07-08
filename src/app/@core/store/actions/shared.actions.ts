import { Action } from "@ngrx/store";
import { Client } from "../../../@core/models/client.model";

// SET ACTIVE CLIENT
export const SET_ACTIVE_CLIENT = "[Admin] Set Active Client";

export class SetActiveClient implements Action {
  readonly type = SET_ACTIVE_CLIENT;
  constructor(public payload: Client) {}
}

export const CLEAR_ACTIVE_CLIENT = "[Admin] Clear Active Client";

export class ClearActiveClient implements Action {
  readonly type = CLEAR_ACTIVE_CLIENT;
}

export type SharedActions = SetActiveClient | ClearActiveClient;
