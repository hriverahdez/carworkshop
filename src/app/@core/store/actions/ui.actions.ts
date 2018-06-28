import { Action } from "@ngrx/store";
import { BreadCrumb } from "../../models/breadcrumb.model";
import { ClientsViewTypes } from "../shared/ui-clients-view-types";

// Fullscreen loader
export const SHOW_FULLSCREEN_LOADER = "[UI] Show Fullscreen loader";
export const HIDE_FULLSCREEN_LOADER = "[UI] Hide Fullscreen loader";

export class ShowFullscreenLoader implements Action {
  readonly type = SHOW_FULLSCREEN_LOADER;
}

export class HideFullscreenLoader implements Action {
  readonly type = HIDE_FULLSCREEN_LOADER;
}

// Loading box
export const SHOW_LOADING_BOX = "[UI] Show Loading Box";
export const HIDE_LOADING_BOX = "[UI] Hide Loading Box";

export class ShowLoadingBox implements Action {
  readonly type = SHOW_LOADING_BOX;
}

export class HideLoadingBox implements Action {
  readonly type = HIDE_LOADING_BOX;
}

// Breadcrumbs
export const SET_BREADCRUMBS = "[UI] Set Breadcrumbs";

export class SetBreadcrumbs implements Action {
  readonly type = SET_BREADCRUMBS;
  constructor(public payload: Array<BreadCrumb>) {}
}

// Clients View
export const SET_CLIENTS_VIEW_TYPE = "[UI] Set Clients View Type";

export class SetClientsViewType implements Action {
  readonly type = SET_CLIENTS_VIEW_TYPE;
  constructor(public payload: ClientsViewTypes) {}
}

export type UIActions =
  | ShowFullscreenLoader
  | HideFullscreenLoader
  | ShowLoadingBox
  | HideLoadingBox
  | SetBreadcrumbs
  | SetClientsViewType;
