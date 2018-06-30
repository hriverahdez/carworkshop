import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Store } from "@ngrx/store";
import * as fromStore from "../store";

import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class MaintenanceExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.AdminState>) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => this.hasMaintenance(route.params.maintenanceId))
    );
  }

  hasMaintenance(id: string): Observable<boolean> {
    return this.store.select(fromStore.selectMaintenanceEntities).pipe(
      map(entities => !!entities[id]),
      take(1)
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.selectMaintenancesLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAllMaintenances());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
