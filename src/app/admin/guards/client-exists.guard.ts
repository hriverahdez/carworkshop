import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../@core/store";
import * as fromStore from "../store";

import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class ClientExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.AdminState>,
    private rootStore: Store<fromRoot.AppState>
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => this.hasClient(route.params.clientId))
    );
  }

  hasClient(id: string): Observable<boolean> {
    return this.store.select(fromStore.selectClientEntities).pipe(
      map(entities => {
        if (!!entities[id]) {
          this.rootStore.dispatch(new fromRoot.SetActiveClient(entities[id]));
        }
        return !!entities[id];
      }),
      take(1)
    );
  }

  //   hasClient(id: string): Observable<boolean> {
  //     return this.store.select(fromStore.selectClientEntities).pipe(
  //       map(entities => !!entities[id]),
  //       take(1)
  //     );
  //   }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.selectClientsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadClients());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
