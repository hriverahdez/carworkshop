import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as fromMaintenance from "../actions/shared.actions";
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  filter,
  takeLast
} from "rxjs/operators";
import { of, Observable } from "rxjs";

import * as fromRoot from "../reducers";
import * as fromSelectors from "../selectors";

import { Client } from "../../../@core/models/client.model";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { Store } from "@ngrx/store";
import { MaintenancesService } from "../../../admin/services";

@Injectable()
export class SharedEffects {
  constructor(
    private actions$: Actions,
    private maintenancesService: MaintenancesService,
    private rootStore$: Store<fromRoot.AppState>
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
}
