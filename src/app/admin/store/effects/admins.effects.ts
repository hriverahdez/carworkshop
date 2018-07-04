import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromAdmins from "../actions/admins.actions";
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  take,
  filter,
  tap
} from "rxjs/operators";
import { of } from "rxjs";

import * as fromRoot from "../../../@core/store";
import { AuthUser } from "../../../@shared/models/auth-user.model";
import { AdminsService } from "../../services/admins.service";

@Injectable()
export class AdminsEffects {
  constructor(
    private actions$: Actions,
    private adminsService: AdminsService
  ) {}

  @Effect()
  loadAdmins$ = this.actions$.ofType(fromAdmins.LOAD_ADMINS).pipe(
    switchMap(() =>
      this.adminsService.getAll().pipe(
        map(admins => {
          return new fromAdmins.LoadAdminsSuccess(admins);
        }),
        catchError(error => of(new fromAdmins.LoadAdminsFail(error)))
      )
    )
  );

  @Effect()
  addAdmin$ = this.actions$.ofType(fromAdmins.ADD_ADMIN).pipe(
    map((action: fromAdmins.AddAdmin) => action.payload),
    switchMap(admin =>
      this.adminsService.add(admin).pipe(
        map(newClient => new fromAdmins.AddAdminSuccess(newClient)),
        catchError(error => of(new fromAdmins.AddAdminFail(error)))
      )
    )
  );

  //   @Effect()
  //   updateClient$ = this.actions$.ofType(fromAdmins.UPDATE_CLIENT).pipe(
  //     map((action: fromAdmins.UpdateClient) => action.payload),
  //     switchMap((client: AuthUser) =>
  //       this.adminsService.update(client).pipe(
  //         map(client => new fromAdmins.UpdateClientSuccess(client)),
  //         catchError(error => of(new fromAdmins.UpdateClientFail(error)))
  //       )
  //     )
  //   );

  @Effect()
  deleteAdmin$ = this.actions$.ofType(fromAdmins.DELETE_ADMIN).pipe(
    map((action: fromAdmins.DeleteAdmin) => action.payload),
    switchMap(admin =>
      this.adminsService.delete(admin).pipe(
        map(() => new fromAdmins.DeleteAdminSuccess(admin)),
        catchError(error => of(new fromAdmins.DeleteAdminFail(error)))
      )
    )
  );

  @Effect()
  handleSuccess$ = this.actions$
    .ofType(fromAdmins.ADD_ADMIN_SUCCESS)
    .pipe(map(() => new fromRoot.Go({ path: ["/app/admin/accounts"] })));

  @Effect()
  showFullscreenLoader$ = this.actions$
    .ofType(fromAdmins.ADD_ADMIN)
    .pipe(map(() => new fromRoot.ShowFullscreenLoader()));

  @Effect()
  hideFullscreenLoader$ = this.actions$
    .ofType(fromAdmins.ADD_ADMIN_SUCCESS, fromAdmins.ADD_ADMIN_FAIL)
    .pipe(map(() => new fromRoot.HideFullscreenLoader()));

  //   @Effect()
  //   showLoadingBox$ = this.actions$
  //     .ofType(fromAdmins.LOAD_CLIENTS)
  //     .pipe(map(() => new fromRoot.ShowLoadingBox()));

  //   @Effect()
  //   hideLoadingBox$ = this.actions$
  //     .ofType(fromAdmins.LOAD_CLIENTS_SUCCESS, fromAdmins.LOAD_CLIENTS_FAIL)
  //     .pipe(map(() => new fromRoot.HideLoadingBox()));
}