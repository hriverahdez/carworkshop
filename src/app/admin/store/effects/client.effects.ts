import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { ClientsService } from "../../services/clients.service";

import * as fromClients from "../actions/client.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import * as fromRoot from "../../../@core/store";
import {
  Pagination,
  EntityPagination
} from "../../../@shared/utils/paginated-response.model";
import { Client } from "../../models/client.model";

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

  //   @Effect()
  //   updateBrand$ = this.actions$
  //     .ofType(fromBrands.UPDATE_BRAND)
  //     .pipe(
  //       map((action: fromBrands.UpdateBrand) => action.payload),
  //       switchMap((brand: Brand) =>
  //         this.brandsService
  //           .updateAsFormData(brand)
  //           .pipe(
  //             map(brand => new fromBrands.UpdateBrandSuccess(brand)),
  //             catchError(error => of(new fromBrands.UpdateBrandFail(error)))
  //           )
  //       )
  //     );

  //   @Effect()
  //   deleteBrand$ = this.actions$
  //     .ofType(fromBrands.DELETE_BRAND)
  //     .pipe(
  //       map((action: fromBrands.DeleteBrand) => action.payload),
  //       switchMap(brand =>
  //         this.brandsService
  //           .delete(brand)
  //           .pipe(
  //             map(() => new fromBrands.DeleteBrandSuccess(brand)),
  //             catchError(error => of(new fromBrands.DeleteBrandFail(error)))
  //           )
  //       )
  //     );

  @Effect()
  handleSuccess$ = this.actions$
    .ofType(fromClients.ADD_CLIENT_SUCCESS)
    .pipe(map(() => new fromRoot.Go({ path: ["/mechanic"] })));

  //   @Effect()
  //   handleBrandFailure$ = this.actions$
  //     .ofType(
  //       fromBrands.ADD_BRAND_FAIL,
  //       fromBrands.UPDATE_BRAND_FAIL,
  //       fromBrands.DELETE_BRAND_FAIL
  //     )
  //     .pipe(map(() => new fromUI.HideProgressBar()));
}
