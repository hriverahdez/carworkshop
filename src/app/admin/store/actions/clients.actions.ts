import { Action } from "@ngrx/store";
import { Client } from "../../../@core/models/client.model";

// LOAD

export const LOAD_CLIENTS = "[Admin] Load Clients";
export const LOAD_CLIENTS_FAIL = "[Admin] Load Clients Fail";
export const LOAD_CLIENTS_SUCCESS = "[Admin] Load Clients Success";

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

export const ADD_CLIENT = "[Admin] Add Client";
export const ADD_CLIENT_FAIL = "[Admin] Add Client Fail";
export const ADD_CLIENT_SUCCESS = "[Admin] Add Client Success";

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

// UPDATE

export const UPDATE_CLIENT = "[Admin] Update Client";
export const UPDATE_CLIENT_FAIL = "[Admin] Update Client Fail";
export const UPDATE_CLIENT_SUCCESS = "[Admin] Update Client Success";

export class UpdateClient implements Action {
  readonly type = UPDATE_CLIENT;
  constructor(public payload: Client) {}
}

export class UpdateClientFail implements Action {
  readonly type = UPDATE_CLIENT_FAIL;
  constructor(public payload: any) {}
}

export class UpdateClientSuccess implements Action {
  readonly type = UPDATE_CLIENT_SUCCESS;
  constructor(public payload: Client) {}
}

// DELETE
export const DELETE_CLIENT = "[Admin] Delete Client";
export const DELETE_CLIENT_FAIL = "[Admin] Delete Client Fail";
export const DELETE_CLIENT_SUCCESS = "[Admin] Delete Client Success";

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
  | UpdateClient
  | UpdateClientFail
  | UpdateClientSuccess
  | DeleteClient
  | DeleteClientFail
  | DeleteClientSuccess;
