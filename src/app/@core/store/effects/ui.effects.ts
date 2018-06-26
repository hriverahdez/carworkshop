import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  RoutesRecognized,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from "@angular/router";
// import { NgProgress } from "ngx-progressbar";

import * as fromStore from "../reducers/ui.reducers";
import * as fromUI from "../actions/ui.actions";
import * as fromRouter from "../actions/router.actions";
import {
  map,
  switchMap,
  concatMap,
  filter,
  distinctUntilChanged
} from "rxjs/operators";
import { Store } from "@ngrx/store";
import { BreadCrumb } from "../../models/breadcrumb.model";

@Injectable()
export class UIEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromStore.State>
  ) {}

  @Effect()
  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => this.buildBreadCrumb(this.activatedRoute.snapshot))
  );

  buildBreadCrumb(
    route: ActivatedRouteSnapshot,
    url: string = "",
    breadcrumbs: Array<BreadCrumb> = []
  ) {
    // console.log("ROUTE::", route);
    if (!route.firstChild && route.routeConfig.path === "") {
      return new fromUI.SetBreadcrumbs(breadcrumbs);
    }

    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data["breadcrumb"]
        : "";

    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : "";

    if (route.paramMap.keys.length > 0) {
      path = this.replaceParamInPath(path, route);
      //   label = route.data["dynamic"] ? route.data["dynamic"] : path;
    }

    if (label === "") {
      return this.buildBreadCrumb(route.firstChild, url, breadcrumbs);
    }

    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };

    const newBreadcrumbs = [...breadcrumbs, breadcrumb];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return new fromUI.SetBreadcrumbs(newBreadcrumbs);
  }

  pathHasParams(path: string) {
    return path.includes(":");
  }

  replaceParamInPath(path: string, route: ActivatedRouteSnapshot) {
    const pathArr = path.split(":");
    const paramValue = route.params[route.paramMap.keys[0]];
    return `${pathArr[0]}${paramValue}`;
  }

  getResolvedData(route: ActivatedRouteSnapshot) {
    return route.data["client"].nombre;
  }

  // @Effect({ dispatch: false })
  // showProgress$ = this.router.events.pipe(
  //   map(event => {
  //     // console.log(event);
  //     if (event instanceof NavigationStart) {
  //       // return of(new fromLayout.DisplayProgressBar());
  //       this.store.dispatch(new fromUI.DisplayProgressBar());
  //     } else if (
  //       event instanceof NavigationEnd ||
  //       event instanceof NavigationCancel
  //     ) {
  //       this.store.dispatch(new fromUI.HideProgressBar());
  //     }
  //   })
  // );
}
