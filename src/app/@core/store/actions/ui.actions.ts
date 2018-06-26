import { Action } from "@ngrx/store";
import { BreadCrumb } from "../../models/breadcrumb.model";
import { ClientsViewTypes } from "../shared/ui-clients-view-types";

// Progress Bar
export const DISPLAY_PROGRESS_BAR = "[UI] Display Progress Bar";
export const HIDE_PROGRESS_BAR = "[UI] Hide Progress Bar";

export class DisplayProgressBar implements Action {
  readonly type = DISPLAY_PROGRESS_BAR;
}

export class HideProgressBar implements Action {
  readonly type = HIDE_PROGRESS_BAR;
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
  | DisplayProgressBar
  | HideProgressBar
  | SetBreadcrumbs
  | SetClientsViewType;
