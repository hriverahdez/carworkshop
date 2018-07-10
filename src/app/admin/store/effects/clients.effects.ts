import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromClients from "../actions/clients.actions";
import * as fromMaintenance from "../actions/maintenances.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import * as fromRoot from "../../../@core/store";

import { ClientsService } from "../../services";
import { SnackBarService } from "../../../@shared/services";
import { Client } from "../../../@core/models/client.model";
import { PaginatedResponse } from "../../../@shared/models/paginated-response.model";

@Injectable()
export class ClientsEffects {
  constructor(
    private actions$: Actions,
    private clientsService: ClientsService,
    private snackbar: SnackBarService
  ) {}

  @Effect()
  loadClients$ = this.actions$.ofType(fromClients.LOAD_CLIENTS).pipe(
    switchMap(() =>
      this.clientsService.getAll().pipe(
        map((response: Client[]) => {
          return new fromClients.LoadClientsSuccess(response);
        }),
        catchError(error => of(new fromClients.LoadClientsFail(error)))
      )
    )
  );

  @Effect()
  addClient$ = this.actions$.ofType(fromClients.ADD_CLIENT).pipe(
    map((action: fromClients.AddClient) => action.payload),
    switchMap(client =>
      this.clientsService.add(client).pipe(
        map(newClient => new fromClients.AddClientSuccess(newClient)),
        catchError(errorResponse => {
          this.snackbar.openSimpleSnackBar(
            errorResponse.error.error,
            "Cerrar",
            6000
          );
          return of(new fromClients.AddClientFail(errorResponse));
        })
      )
    )
  );

  @Effect()
  updateClient$ = this.actions$.ofType(fromClients.UPDATE_CLIENT).pipe(
    map((action: fromClients.UpdateClient) => action.payload),
    switchMap((client: Client) =>
      this.clientsService.update(client).pipe(
        map(client => new fromClients.UpdateClientSuccess(client)),
        catchError(errorResponse => {
          this.snackbar.openSimpleSnackBar(
            errorResponse.error.error,
            "Cerrar",
            6000
          );
          return of(new fromClients.UpdateClientFail(errorResponse));
        })
      )
    )
  );

  @Effect()
  deleteClient$ = this.actions$.ofType(fromClients.DELETE_CLIENT).pipe(
    map((action: fromClients.DeleteClient) => action.payload),
    switchMap(client =>
      this.clientsService.delete(client).pipe(
        map(() => new fromClients.DeleteClientSuccess(client)),
        catchError(error => of(new fromClients.DeleteClientFail(error)))
      )
    )
  );

  @Effect()
  handleSuccess$ = this.actions$
    .ofType(fromClients.ADD_CLIENT_SUCCESS, fromClients.UPDATE_CLIENT_SUCCESS)
    .pipe(map(() => new fromRoot.Back()));

  @Effect()
  showFullscreenLoader$ = this.actions$
    .ofType(fromClients.ADD_CLIENT, fromClients.UPDATE_CLIENT)
    .pipe(map(() => new fromRoot.ShowFullscreenLoader()));

  @Effect()
  hideFullscreenLoader$ = this.actions$
    .ofType(
      fromClients.ADD_CLIENT_SUCCESS,
      fromClients.ADD_CLIENT_FAIL,
      fromClients.UPDATE_CLIENT_SUCCESS,
      fromClients.UPDATE_CLIENT_FAIL
    )
    .pipe(map(() => new fromRoot.HideFullscreenLoader()));

  @Effect()
  showLoadingBox$ = this.actions$
    .ofType(fromClients.LOAD_CLIENTS)
    .pipe(map(() => new fromRoot.ShowLoadingBox()));

  @Effect()
  hideLoadingBox$ = this.actions$
    .ofType(fromClients.LOAD_CLIENTS_SUCCESS, fromClients.LOAD_CLIENTS_FAIL)
    .pipe(map(() => new fromRoot.HideLoadingBox()));
}
