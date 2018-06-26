import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromRoot from "../../../@core/store";
import * as fromClient from "../actions/client.actions";
import { switchMap, map, catchError, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { ClientsService } from "../../../admin/services";
import { Store } from "@ngrx/store";

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private usStore$: Store<fromRoot.AppState>,
    private clientsService: ClientsService
  ) {}

  @Effect()
  loadClients$ = this.actions$.ofType(fromClient.LOAD_CLIENT_DATA).pipe(
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
}
