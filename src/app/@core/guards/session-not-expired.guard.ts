import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { map, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";
import * as fromStore from "../store";

import * as fromSharedServices from "../../@shared/services";
import { Observable } from "rxjs";

@Injectable()
export class SessionNotExpiredGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.AppState>,
    private authService: fromSharedServices.AuthenticationService
  ) {}

  canActivate(): Observable<boolean> {
    return this.checkStore();
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.selectCurrentUser).pipe(
      tap(user => {
        const inStore = user && user.name;
        if (inStore) return false;
        return this.authService.isAuthenticated();
      }),
      map(isLoggedIn => {
        if (isLoggedIn) {
          const user = this.authService.getCurrentUser();
          this.store.dispatch(new fromStore.SetUser(user));
        }
        return true;
      })
    );
  }
}
