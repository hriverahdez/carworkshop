import { Injectable } from "@angular/core";

import { CanActivate, CanActivateChild } from "@angular/router";

import { Store } from "@ngrx/store";

import * as fromRoot from "../../@core/store";
import { AuthenticationService } from "../../@shared/services";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private store: Store<fromRoot.AppState>,
    private authService: AuthenticationService
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.store.dispatch(
        new fromRoot.Go({
          path: ["/login"]
        })
      );
      return false;
    }
  }

  canActivateChild() {
    return this.canActivate();
  }
}
