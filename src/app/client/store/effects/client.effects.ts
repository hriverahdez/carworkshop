import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromRoot from "../../../@core/store";
import * as fromClient from "../actions/client.actions";
import { switchMap, map, catchError, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { ClientsService } from "../../../admin/services";
import { Store } from "@ngrx/store";
import { SnackBarService } from "../../../@shared/services";
import { MaintenancesHelperService } from "../../../@core/services/maintenances-helper.service";
import { Client } from "../../../@core/models/client.model";

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private usStore$: Store<fromRoot.AppState>,
    private clientsService: ClientsService,
    private mHelper: MaintenancesHelperService,
    private snackbar: SnackBarService
  ) {}

  @Effect()
  loadCurrentClientData$ = this.actions$
    .ofType(fromClient.LOAD_CLIENT_DATA)
    .pipe(
      withLatestFrom(this.usStore$),
      switchMap(([action, state]) =>
        this.clientsService.getOne(state.auth.currentUser.clientID).pipe(
          map(client => {
            return new fromRoot.SetActiveClient(client);
          }),
          catchError(error => of(new fromClient.LoadClientDataFail(error)))
        )
      )
    );

  @Effect()
  setActiveCategories$ = this.actions$
    .ofType(fromClient.LOAD_CLIENT_DATA_SUCCESS)
    .pipe(
      map((action: fromClient.LoadClientDataSuccess) => action.payload),
      map((clientData: Client) => {
        const activeCategories = this.mHelper.getActiveCategories(
          clientData.car.maintenances
        );
        return new fromClient.SetActiveCategories(activeCategories);
      })
    );

  @Effect()
  updateProfile$ = this.actions$.ofType(fromClient.UPDATE_PROFILE).pipe(
    map((action: fromClient.UpdateProfile) => action.payload),
    switchMap(client =>
      this.clientsService.updateClientProfile(client).pipe(
        map(client => new fromClient.UpdateProfileSuccess(client)),
        catchError(errorResponse => {
          this.snackbar.openSimpleSnackBar(errorResponse.error.error, "Cerrar");
          return of(new fromClient.UpdateProfileFail(errorResponse));
        })
      )
    )
  );

  @Effect()
  redirectAfterProfileUpdate$ = this.actions$
    .ofType(fromClient.UPDATE_PROFILE_SUCCESS)
    .pipe(map(() => new fromRoot.Go({ path: ["/app/client"] })));

  @Effect()
  showFullscreenLoader$ = this.actions$
    .ofType(fromClient.UPDATE_PROFILE)
    .pipe(map(() => new fromRoot.ShowFullscreenLoader()));

  @Effect()
  hideFullscreenLoader$ = this.actions$
    .ofType(fromClient.UPDATE_PROFILE_FAIL, fromClient.UPDATE_PROFILE_SUCCESS)
    .pipe(map(() => new fromRoot.HideFullscreenLoader()));
}
