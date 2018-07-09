import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromMaintenance from "../actions/shared.actions";
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  filter,
  takeLast,
  delay
} from "rxjs/operators";
import { of, Observable } from "rxjs";

import * as fromRoot from "../reducers";
import * as fromShared from "../actions/shared.actions";
import * as fromUI from "../actions/ui.actions";
import * as fromSelectors from "../selectors";

import { Client } from "../../../@core/models/client.model";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { Store } from "@ngrx/store";
import { MaintenancesService } from "../../../admin/services";
import { FileDownloadHelperService } from "../../services/file-download-helper.service";
import { SnackBarService } from "../../../@shared/services";

@Injectable()
export class SharedEffects {
  constructor(
    private actions$: Actions,
    private maintenancesService: MaintenancesService,
    private rootStore$: Store<fromRoot.AppState>,
    private fdHelper: FileDownloadHelperService,
    private snackbar: SnackBarService
  ) {}

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

  // @Effect()
  // downloadDatasheet$ = this.actions$.ofType(fromShared.DOWNLOAD_CLIENT_DATASHEET).pipe(
  //     map((action: fromShared.DownloadClientDatasheet) => action.payload),
  //     switchMap(client$ => client$.pipe(
  //         map(client => {
  //             const endpoint = `maintenancesDatasheet/${client.id}`
  //             return this.fdHelper.getFile()
  //         })
  //     ))
  // )

  @Effect()
  downloadDatasheet$ = this.actions$
    .ofType(fromShared.DOWNLOAD_CLIENT_DATASHEET)
    .pipe(
      delay(500),
      withLatestFrom(this.rootStore$.select(fromSelectors.selectActiveClient)),
      switchMap(([action, activeClient]) => {
        const endpoint = `maintenancesDatasheet/${activeClient.id}`;
        const fileName = `Ficha - ${activeClient.firstName} ${
          activeClient.lastName
        } (${activeClient.car.plateNumber}).pdf`;
        return this.fdHelper.getFile(endpoint, fileName).pipe(
          map(() => new fromShared.DownloadClientDatasheetSuccess()),
          catchError(error =>
            of(new fromShared.DownloadClientDatasheetFail(error))
          )
        );
      })
    );

  @Effect({ dispatch: false })
  downloadDatasheetFailed$ = this.actions$
    .ofType(fromShared.DOWNLOAD_CLIENT_DATASHEET_FAIL)
    .pipe(
      map(() =>
        this.snackbar.openSimpleSnackBar(
          "Oops, al parecer hubo un error en el servidor. Intente de nuevo",
          "Cerrar"
        )
      )
    );
}
