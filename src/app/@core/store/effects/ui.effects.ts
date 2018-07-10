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
    // Reached last route child. Return the breadcrumbs
    if (!route.firstChild && route.routeConfig.path === "") {
      return new fromUI.SetBreadcrumbs(breadcrumbs);
    }

    // Get the breadcrumb name from route data
    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data["breadcrumb"]
        : "";

    // Create the breadcrumb path from the route path
    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : "";

    // If route has params, join everything (route and params) in a single link
    if (route.paramMap.keys.length > 0) {
      path = this.replaceParamInPath(path, route);
    }

    // If couldn't get a label because the route was a parent but didn't have a breadcrumb data config
    // then call self again with the next function params to skip the empty label route
    if (label === "") {
      return this.buildBreadCrumb(route.firstChild, url, breadcrumbs);
    }

    // Build the breadcrumb
    const nextUrl = `${url}${path}/`;
    const breadcrumb: BreadCrumb = {
      label: label,
      url: nextUrl
    };

    // Add the breadcrumb to the breadcrums[]
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];

    // Recursively call self to keep generating breadcrumbs
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

  /**
   * JIC: Left here in case loading indication is needed when lazily loading modules
   * (AKA: Listening to the router navigation events and displaying/hiding loader)
   */
  // @Effect({ dispatch: false })
  // showProgress$ = this.router.events.pipe(
  //   map(event => {
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
