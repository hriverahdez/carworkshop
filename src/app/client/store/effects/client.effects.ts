import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromRoot from "../../../@core/store";
import * as fromClient from "../actions/client.actions";
import { switchMap, map, catchError, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import {
  ClientsService,
  MaintenancesHelperService
} from "../../../admin/services";
import { Store } from "@ngrx/store";
import { Client } from "../../../admin/models/client.model";

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private usStore$: Store<fromRoot.AppState>,
    private clientsService: ClientsService,
    private mHelper: MaintenancesHelperService
  ) {}

  @Effect()
  loadCurrentClientData$ = this.actions$
    .ofType(fromClient.LOAD_CLIENT_DATA)
    .pipe(
      withLatestFrom(this.usStore$),
      switchMap(([action, state]) =>
        this.clientsService.getOne(state.auth.currentUser.clientID).pipe(
          map(client => {
            return new fromClient.LoadClientDataSuccess(client);
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
}
