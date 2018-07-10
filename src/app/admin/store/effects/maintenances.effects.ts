import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { switchMap, map, catchError, filter } from "rxjs/operators";
import { of, Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromStore from "../reducers";
import * as fromSelectors from "../selectors";
import * as fromMaintenance from "../actions/maintenances.actions";

import { Maintenance } from "../../../@core/models/maintenance.model";
import { Client } from "../../../@core/models/client.model";

import { MaintenancesService } from "../../services";

@Injectable()
export class MaintenancesEffects {
  constructor(
    private actions$: Actions,
    private maintenancesService: MaintenancesService,
    private store$: Store<fromStore.AdminState>,
    private rootStore$: Store<fromRoot.AppState>
  ) {}

  @Effect()
  loadAllMaintenances$ = this.actions$
    .ofType(fromMaintenance.LOAD_ALL_MAINTENANCES)
    .pipe(
      switchMap(() =>
        this.maintenancesService.getAll().pipe(
          map(maintenances => {
            return new fromMaintenance.LoadAllMaintenancesSuccess(maintenances);
          }),
          catchError(error =>
            of(new fromMaintenance.LoadAllMaintenancesFail(error))
          )
        )
      )
    );

  @Effect()
  loadClientMaintenances$ = this.actions$
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

  @Effect()
  updateMaintenance$ = this.actions$
    .ofType(fromMaintenance.UPDATE_MAINTENANCE)
    .pipe(
      map((action: fromMaintenance.UpdateMaintenance) => action.payload),
      switchMap((maintenance: Maintenance) =>
        this.maintenancesService.update(maintenance).pipe(
          map(
            maintenance =>
              new fromMaintenance.UpdateMaintenanceSuccess(maintenance)
          ),
          catchError(error =>
            of(new fromMaintenance.UpdateMaintenanceFail(error))
          )
        )
      )
    );

  @Effect()
  deleteMaintenance$ = this.actions$
    .ofType(fromMaintenance.DELETE_MAINTENANCE)
    .pipe(
      map((action: fromMaintenance.DeleteMaintenance) => action.payload),
      switchMap(maintenance =>
        this.maintenancesService.delete(maintenance).pipe(
          map(() => new fromMaintenance.DeleteMaintenanceSuccess(maintenance)),
          catchError(error =>
            of(new fromMaintenance.DeleteMaintenanceFail(error))
          )
        )
      )
    );

  @Effect()
  handleSuccess$ = this.actions$
    .ofType(
      fromMaintenance.ADD_MAINTENANCE_SUCCESS,
      fromMaintenance.UPDATE_MAINTENANCE_SUCCESS
    )
    .pipe(map(() => new fromRoot.Back()));

  @Effect()
  showLoader$ = this.actions$
    .ofType(fromMaintenance.ADD_MAINTENANCE, fromMaintenance.UPDATE_MAINTENANCE)
    .pipe(map(() => new fromRoot.ShowFullscreenLoader()));

  @Effect()
  hideLoader$ = this.actions$
    .ofType(
      fromMaintenance.ADD_MAINTENANCE_FAIL,
      fromMaintenance.ADD_MAINTENANCE_SUCCESS,
      fromMaintenance.UPDATE_MAINTENANCE_FAIL,
      fromMaintenance.UPDATE_MAINTENANCE_SUCCESS
    )
    .pipe(map(() => new fromRoot.HideFullscreenLoader()));
}
