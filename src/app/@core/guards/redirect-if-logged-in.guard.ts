import { Injectable } from "@angular/core";
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from "@angular/router";

import { map, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";
import * as fromStore from "../store";

import * as fromSharedServices from "../../@shared/services";
import { Observable } from "rxjs";
import { AuthUser } from "../../@shared/models/auth-user.model";

@Injectable()
export class RedirectIfLoggedInGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.AppState>,
    private authService: fromSharedServices.AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.checkStore();
  }

  checkStore(): boolean | Observable<boolean> {
    return this.store.select(fromStore.selectCurrentUser).pipe(
      map(user => {
        return user && user.name ? user : this.authService.getCurrentUser();
      }),
      map(user => {
        console.log("USER:", user);
        if (user) {
          this.isAdmin(user)
            ? this.router.navigateByUrl("/app/admin")
            : this.router.navigateByUrl("/app/client");
        }
        return true;
      })
    );
  }

  isAdmin(user: AuthUser) {
    return user.role.name === "mechanic";
  }
}
