import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { ClientsService } from "../../services/clients.service";

import * as fromClients from "../actions/client.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private clientsService: ClientsService
  ) {}

  @Effect()
  loadClients$ = this.actions$.ofType(fromClients.LOAD_CLIENTS).pipe(
    switchMap(() =>
      this.clientsService.getAll().pipe(
        map((response: any) => {
          return new fromClients.LoadClientsSuccess(response.clientes.data);
        }),
        catchError(error => of(new fromClients.LoadClientsFail(error)))
      )
    )
  );

  //   @Effect()
  //   createBrand$ = this.actions$
  //     .ofType(fromBrands.ADD_BRAND)
  //     .pipe(
  //       map((action: fromBrands.AddBrand) => action.payload),
  //       switchMap(brand =>
  //         this.brandsService
  //           .addAsFormData(brand)
  //           .pipe(
  //             map(newBrand => new fromBrands.AddBrandSuccess(newBrand)),
  //             catchError(error => of(new fromBrands.AddBrandFail(error)))
  //           )
  //       )
  //     );

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

  //   @Effect()
  //   handleBrandSuccess$ = this.actions$
  //     .ofType(
  //       fromBrands.ADD_BRAND_SUCCESS,
  //       fromBrands.UPDATE_BRAND_SUCCESS,
  //       fromBrands.DELETE_BRAND_SUCCESS
  //     )
  //     .pipe(
  //       switchMap(() => [new fromUI.CloseModal(), new fromUI.HideProgressBar()])
  //     );

  //   @Effect()
  //   handleBrandFailure$ = this.actions$
  //     .ofType(
  //       fromBrands.ADD_BRAND_FAIL,
  //       fromBrands.UPDATE_BRAND_FAIL,
  //       fromBrands.DELETE_BRAND_FAIL
  //     )
  //     .pipe(map(() => new fromUI.HideProgressBar()));
}
