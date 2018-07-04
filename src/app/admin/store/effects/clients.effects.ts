import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromClients from "../actions/clients.actions";
import * as fromMaintenance from "../actions/maintenances.actions";
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
import {
  Pagination,
  EntityPagination
} from "../../../@shared/utils/paginated-response.model";
import { Client } from "../../models/client.model";
import { ClientsService } from "../../services";

@Injectable()
export class ClientsEffects {
  constructor(
    private actions$: Actions,
    private clientsService: ClientsService
  ) {}

  @Effect()
  loadClients$ = this.actions$.ofType(fromClients.LOAD_CLIENTS).pipe(
    switchMap(() =>
      this.clientsService.getAll().pipe(
        map(
          (response: {
            pagination: Pagination;
            clients: EntityPagination<Client>;
          }) => {
            return new fromClients.LoadClientsSuccess(response.clients.data);
          }
        ),
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
        catchError(error => of(new fromClients.AddClientFail(error)))
      )
    )
  );

  @Effect()
  updateClient$ = this.actions$.ofType(fromClients.UPDATE_CLIENT).pipe(
    map((action: fromClients.UpdateClient) => action.payload),
    switchMap((client: Client) =>
      this.clientsService.update(client).pipe(
        map(client => new fromClients.UpdateClientSuccess(client)),
        catchError(error => of(new fromClients.UpdateClientFail(error)))
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
