import { environment } from "../../../../environments/environment";
import * as fromRouter from "@ngrx/router-store";

import {
  Params,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";

import * as fromUI from "./ui.reducers";
import * as fromAuth from "./auth.reducer";

export interface AppState {
  ui: fromUI.State;
  auth: fromAuth.AuthState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.reducer,
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>("router");

export const getUIState = createFeatureSelector<fromUI.State>("ui");

export const getAuthState = createFeatureSelector<fromAuth.AuthState>("auth");

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
