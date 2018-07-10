import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { map, switchMap, catchError, delay } from "rxjs/operators";

import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";

import * as fromRouter from "../actions/router.actions";
import * as fromSharedActions from "../actions/shared.actions";
import * as fromSharedServices from "../../../@shared/services";
import * as authActions from "../actions/auth.actions";
import * as uiActions from "../actions/ui.actions";
import { CustomError } from "../../../@shared/utils/custom-error";
import { of, pipe } from "rxjs";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromFeature.AppState>,
    private authService: fromSharedServices.AuthenticationService,
    private snackbar: fromSharedServices.SnackBarService
  ) {}

  @Effect()
  login$ = this.actions$.ofType(authActions.LOGIN).pipe(
    map((action: authActions.Login) => action.payload),
    switchMap(credentials => {
      return this.authService.login(credentials).pipe(
        map(user => new authActions.LoginSuccess(user)),
        catchError(errorResponse =>
          of(new authActions.LoginFail(errorResponse))
        )
      );
    })
  );

  /**
   * Redirect to proper user-home based on role
   */
  @Effect()
  loginSuccess$ = this.actions$.ofType(authActions.LOGIN_SUCCESS).pipe(
    map((action: authActions.LoginSuccess) => {
      const user = action.payload;
      return user.role.name === "mechanic" || user.role.name === "superadmin"
        ? new fromRouter.Go({
            path: ["/app/admin"]
          })
        : new fromRouter.Go({
            path: ["/app/client"]
          });
    })
  );

  /** Wait 5 after last error and clear error message */
  @Effect()
  loginFailure$ = this.actions$.ofType(authActions.LOGIN_FAIL).pipe(
    switchMap(action =>
      of(action).pipe(
        delay(5000),
        map(() => new authActions.LoginFail({}))
      )
    )
  );

  @Effect()
  updateUserProfile$ = this.actions$
    .ofType(authActions.UPDATE_USER_PROFILE)
    .pipe(
      map((action: authActions.UpdateUserProfile) => action.payload),
      switchMap(user =>
        this.authService.updateUserInfo(user).pipe(
          map(
            updatedUser => new authActions.UpdateUserProfileSuccess(updatedUser)
          ),
          catchError(errorResponse => {
            this.snackbar.openSimpleSnackBar(
              errorResponse.error.error,
              "Cerrar"
            );
            return of(new authActions.UpdateUserProfileFail(errorResponse));
          })
        )
      )
    );

  @Effect()
  requestPasswordRecovery$ = this.actions$
    .ofType(authActions.REQUEST_PASSWORD_RECOVERY_EMAIL)
    .pipe(
      map((action: authActions.RequestPasswordRecoveryEmail) => action.payload),
      switchMap(data =>
        this.authService.requestPasswordRecoveryEmail(data).pipe(
          map(
            (res: { success: boolean; message: string }) =>
              new authActions.RequestPasswordRecoveryEmailSuccess(res)
          ),
          catchError(res =>
            of(new authActions.RequestPasswordRecoveryEmailFail(res.error))
          )
        )
      )
    );

  @Effect()
  resetLostPassword$ = this.actions$
    .ofType(authActions.RESET_LOST_PASSWORD)
    .pipe(
      map((action: authActions.ResetLostPassword) => action.payload),
      switchMap(data =>
        this.authService.resetLostPassword(data).pipe(
          map(res => new authActions.ResetLostPasswordSuccess(res)),
          catchError(res =>
            of(new authActions.ResetLostPasswordFail(res.error))
          )
        )
      )
    );

  /** Wait 5 seconds after last error and clear password recovery/reset error message */
  @Effect()
  clearPasswordRecoveryStatus$ = this.actions$
    .ofType(
      authActions.REQUEST_PASSWORD_RECOVERY_EMAIL_FAIL,
      authActions.REQUEST_PASSWORD_RECOVERY_EMAIL_SUCCESS
    )
    .pipe(
      switchMap(action =>
        of(action).pipe(
          delay(5000),
          map(() => new authActions.ClearRequestPasswordRecoveryStatus())
        )
      )
    );

  @Effect()
  showFullscreenLoader$ = this.actions$
    .ofType(authActions.UPDATE_USER_PROFILE)
    .pipe(map(() => new uiActions.ShowFullscreenLoader()));

  @Effect()
  hideFullscreenLoader$ = this.actions$
    .ofType(
      authActions.UPDATE_USER_PROFILE_FAIL,
      authActions.UPDATE_USER_PROFILE_SUCCESS
    )
    .pipe(map(() => new uiActions.HideFullscreenLoader()));

  @Effect()
  returnAfterProfileUpdate$ = this.actions$
    .ofType(authActions.UPDATE_USER_PROFILE_SUCCESS)
    .pipe(map(() => new fromRouter.Go({ path: ["/app/admin"] })));

  @Effect()
  logout$ = this.actions$.ofType(authActions.LOGOUT).pipe(
    switchMap(() => {
      this.authService.logOut();
      return [
        new fromRouter.Go({
          path: ["/home"]
        }),
        new fromSharedActions.ClearActiveClient()
      ];
    })
  );
}
