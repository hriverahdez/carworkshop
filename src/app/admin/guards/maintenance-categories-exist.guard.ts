import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";
import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../@core/store";

@Injectable()
export class MaintenanceCategoriesExistGuard implements CanActivate {
  constructor(private store: Store<fromRoot.AppState>) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromRoot.selectMaintenanceCategoriesLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromRoot.LoadMaintenanceCategories());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
