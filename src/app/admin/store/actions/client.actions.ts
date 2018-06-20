import { Action } from "@ngrx/store";
import { Client } from "../../models/client.model";

// LOAD

export const LOAD_CLIENTS = "[Mechanic] Load Clients";
export const LOAD_CLIENTS_FAIL = "[Mechanic] Load Clients Fail";
export const LOAD_CLIENTS_SUCCESS = "[Mechanic] Load Clients Success";

export class LoadClients implements Action {
  readonly type = LOAD_CLIENTS;
}

export class LoadClientsFail implements Action {
  readonly type = LOAD_CLIENTS_FAIL;

  constructor(public payload: any) {}
}

export class LoadClientsSuccess implements Action {
  readonly type = LOAD_CLIENTS_SUCCESS;

  constructor(public payload: Client[]) {}
}

// ADD

export const ADD_CLIENT = "[Mechanic] Add Client";
export const ADD_CLIENT_FAIL = "[Mechanic] Add Client Fail";
export const ADD_CLIENT_SUCCESS = "[Mechanic] Add Client Success";

export class AddClient implements Action {
  readonly type = ADD_CLIENT;
  constructor(public payload: Client) {}
}

export class AddClientFail implements Action {
  readonly type = ADD_CLIENT_FAIL;
  constructor(public payload: any) {}
}

export class AddClientSuccess implements Action {
  readonly type = ADD_CLIENT_SUCCESS;
  constructor(public payload: Client) {}
}

// DELETE

export const DELETE_CLIENT = "[Mechanic] Delete Client";
export const DELETE_CLIENT_FAIL = "[Mechanic] Delete Client Fail";
export const DELETE_CLIENT_SUCCESS = "[Mechanic] Delete Client Success";

export class DeleteClient implements Action {
  readonly type = DELETE_CLIENT;
  constructor(public payload: Client) {}
}

export class DeleteClientFail implements Action {
  readonly type = DELETE_CLIENT_FAIL;
  constructor(public payload: any) {}
}

export class DeleteClientSuccess implements Action {
  readonly type = DELETE_CLIENT_SUCCESS;
  constructor(public payload: Client) {}
}

export type ClientActions =
  | LoadClients
  | LoadClientsFail
  | LoadClientsSuccess
  | AddClient
  | AddClientFail
  | AddClientSuccess
  | DeleteClient
  | DeleteClientFail
  | DeleteClientSuccess;
