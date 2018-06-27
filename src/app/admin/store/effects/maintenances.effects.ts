import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromMaintenance from "../actions/maintenances.actions";
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  filter,
  takeLast
} from "rxjs/operators";
import { of, Observable } from "rxjs";

import * as fromRoot from "../../../@core/store";

import { MaintenancesService } from "../../services";
import { Client } from "../../models/client.model";

@Injectable()
export class MaintenancesEffects {
  constructor(
    private actions$: Actions,
    private maintenancesService: MaintenancesService
  ) {}

  @Effect()
  loadClients$ = this.actions$
    .ofType(fromMaintenance.LOAD_CLIENT_MAINTENANCES)
    .pipe(
      map((action: fromMaintenance.LoadClientMaintenances) => action.payload),
      switchMap((client$: Observable<Client>) =>
        client$.pipe(
          filter((client: Client) => !!client),
          switchMap((client: Client) => {
            return this.maintenancesService.getByClientId(client.id).pipe(
              map(maintenances => {
                return new fromMaintenance.LoadClientMaintenancesSuccess(
                  maintenances
                );
              }),
              catchError(error =>
                of(new fromMaintenance.LoadClientMaintenancesFail(error))
              )
            );
          })
        )
      )
    );

  //   @Effect()
  //   addClient$ = this.actions$.ofType(fromMaintenance.ADD_CLIENT).pipe(
  //     map((action: fromMaintenance.AddClient) => action.payload),
  //     switchMap(client =>
  //       this.clientsService.add(client).pipe(
  //         map(newClient => new fromMaintenance.AddClientSuccess(newClient)),
  //         catchError(error => of(new fromMaintenance.AddClientFail(error)))
  //       )
  //     )
  //   );

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
  //   deleteBrand$ = this.actions$.ofType(fromMaintenance.DELETE_CLIENT).pipe(
  //     map((action: fromMaintenance.DeleteClient) => action.payload),
  //     switchMap(client =>
  //       this.clientsService.delete(client).pipe(
  //         map(() => new fromMaintenance.DeleteClientSuccess(client)),
  //         catchError(error => of(new fromMaintenance.DeleteClientFail(error)))
  //       )
  //     )
  //   );

  //   @Effect()
  //   handleSuccess$ = this.actions$
  //     .ofType(fromMaintenance.ADD_CLIENT_SUCCESS)
  //     .pipe(map(() => new fromRoot.Go({ path: ["/mechanic"] })));

  @Effect()
  showLoader$ = this.actions$
    .ofType(fromMaintenance.LOAD_CLIENT_MAINTENANCES)
    .pipe(map(() => new fromRoot.DisplayProgressBar()));

  @Effect()
  hideLoader$ = this.actions$
    .ofType(
      fromMaintenance.LOAD_CLIENT_MAINTENANCES_SUCCESS,
      fromMaintenance.LOAD_CLIENT_MAINTENANCES_FAIL
    )
    .pipe(map(() => new fromRoot.HideProgressBar()));
}
