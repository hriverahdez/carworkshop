import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromStore from "../store";
import { map, filter, tap } from "rxjs/operators";
import { AuthUser } from "../../@shared/models/auth-user.model";

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<fromStore.AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store
      .select(fromStore.selectCurrentUser)
      .pipe(map(user => this.isAdmin(user)));
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }

  isAdmin(user: AuthUser) {
    return user.role.name === "mechanic";
  }
}
