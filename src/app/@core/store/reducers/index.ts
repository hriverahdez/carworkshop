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

import { environment } from "../../../../environments/environment";

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>("router");

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
