import { Action } from "@ngrx/store";
import { BreadCrumb } from "../../models/breadcrumb.model";

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

export type UIActions = DisplayProgressBar | HideProgressBar | SetBreadcrumbs;
