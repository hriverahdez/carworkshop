import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { map, switchMap, catchError } from "rxjs/operators";

import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";

import * as fromRouter from "../actions/router.actions";
import * as fromSharedServices from "../../../@shared/services";
import * as authActions from "../actions/auth.actions";
import { CustomError } from "../../../@shared/utils/custom-error";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromFeature.AppState>,
    private authService: fromSharedServices.AuthenticationService
  ) {}

  @Effect()
  login$ = this.actions$.ofType(authActions.LOGIN).pipe(
    map((action: authActions.Login) => action.payload),
    switchMap(credentials => {
      return this.authService.login(credentials).pipe(
        map(user => new authActions.LoginSuccess(user)),
        catchError(error => of(new authActions.LoginFail(error)))
      );
    })
  );

  //   @Effect()
  //   register$ = this.actions$
  //     .ofType(authActions.REGISTER)
  //     .pipe(
  //       map((action: authActions.Register) => action.payload),
  //       switchMap(user =>
  //         this.authService
  //           .register(user)
  //           .pipe(
  //             map(
  //               registeredUser => new authActions.RegisterSuccess(registeredUser)
  //             ),
  //             catchError(error => of(new authActions.RegisterFail(error)))
  //           )
  //       )
  //     );

  @Effect()
  loginSuccess$ = this.actions$
    .ofType(authActions.LOGIN_SUCCESS, authActions.REGISTER_SUCCESS)
    .pipe(
      map((action: authActions.LoginSuccess) => {
        const user = action.payload;
        return user.role.name === "mechanic"
          ? new fromRouter.Go({
              path: ["/app/admin"]
            })
          : new fromRouter.Go({
              path: ["/app/client"]
            });
      })
    );

  //   @Effect({ dispatch: false })
  //   loginFail$ = this.actions$.ofType(authActions.LOGIN_FAIL).pipe(
  //     switchMap(action => {
  //       return this.store
  //         .select(fromSelectors.getLoginError)
  //         .pipe(
  //           map((error: CustomError) =>
  //             this.snackbar.openSimpleSnackBar(error.message)
  //           )
  //         );
  //     })
  //   );

  @Effect()
  logout$ = this.actions$.ofType(authActions.LOGOUT).pipe(
    map(() => {
      this.authService.logOut();
      return new fromRouter.Go({
        path: ["/home"]
      });
    })
  );
}
