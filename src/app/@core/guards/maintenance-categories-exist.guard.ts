import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from "@angular/router";
import { Observable, of } from "rxjs";
import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../@core/store";

@Injectable()
export class MaintenanceCategoriesExistGuard
  implements CanActivate, CanActivateChild {
  constructor(private store: Store<fromRoot.AppState>) {}
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  canActivateChild() {
    return this.canActivate();
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
