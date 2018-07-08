import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../@core/store";
import * as fromStore from "../store";

import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClientLoadedGuard implements CanActivate, CanActivateChild {
  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.ClientState>
  ) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }

  checkStore(): Observable<boolean> {
    return this.rootStore.select(fromRoot.selectActiveClientLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadClientData());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
