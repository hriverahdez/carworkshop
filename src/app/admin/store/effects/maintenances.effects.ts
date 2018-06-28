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

  @Effect()
  loadCategories$ = this.actions$
    .ofType(fromMaintenance.LOAD_MAINTENANCE_CATEGORIES)
    .pipe(
      switchMap(() =>
        this.maintenancesService.getAllCategories().pipe(
          map(
            categories =>
              new fromMaintenance.LoadMaintenanceCategoriesSuccess(categories)
          ),
          catchError(error =>
            of(new fromMaintenance.LoadMaintenanceCategoriesFail(error))
          )
        )
      )
    );

  @Effect()
  addMaintenance$ = this.actions$.ofType(fromMaintenance.ADD_MAINTENANCE).pipe(
    map((action: fromMaintenance.AddMaintenance) => action.payload),
    switchMap(maintenance =>
      this.maintenancesService.add(maintenance).pipe(
        map(
          newMaintenance =>
            new fromMaintenance.AddMaintenanceSuccess(newMaintenance)
        ),
        catchError(error => of(new fromMaintenance.AddMaintenanceFail(error)))
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
  //   deleteBrand$ = this.actions$.ofType(fromMaintenance.DELETE_CLIENT).pipe(
  //     map((action: fromMaintenance.DeleteClient) => action.payload),
  //     switchMap(client =>
  //       this.clientsService.delete(client).pipe(
  //         map(() => new fromMaintenance.DeleteClientSuccess(client)),
  //         catchError(error => of(new fromMaintenance.DeleteClientFail(error)))
  //       )
  //     )
  //   );

  @Effect()
  handleSuccess$ = this.actions$
    .ofType(fromMaintenance.ADD_MAINTENANCE_SUCCESS)
    .pipe(map(() => new fromRoot.Back()));

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
