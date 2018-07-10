import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { switchMap } from "rxjs/operators";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-maintenance-history",
  templateUrl: "./maintenance-history.component.html",
  styleUrls: ["./maintenance-history.component.css"]
})
export class MaintenanceHistoryComponent implements OnInit {
  filterById = null;
  activeClientCar$: Observable<Car>;
  currentUserIsAdmin$: Observable<boolean>;
  activeClientMaintenances$: Observable<Maintenance[]>;
  maintenanceCategories$: Observable<MaintenanceCategory[]>;

  constructor(
    private route: ActivatedRoute,
    private rootStore: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    if (this.route.snapshot.queryParams["filter"]) {
      this.filterById = this.route.snapshot.queryParams["filter"];
    }

    this.activeClientCar$ = this.rootStore.select(
      fromRoot.selectActiveClientCar
    );

    this.maintenanceCategories$ = this.rootStore.select(
      fromRoot.selectMaintenanceCategories
    );

    this.currentUserIsAdmin$ = this.rootStore.select(
      fromRoot.selectCurrentUserIsAdmin
    );

    this.activeClientMaintenances$ = this.currentUserIsAdmin$.pipe(
      switchMap(isAdmin => {
        return isAdmin
          ? this.rootStore.select(
              fromRoot.selectActiveClientMaintenancesAsAdmin
            )
          : this.rootStore.select(fromRoot.selectActiveClientMaintenances);
      })
    );
  }

  // TODO: Delete this.
  // AND TODO: Update currentUser info when profile updates
  deleteMaintenance(maintenance) {}
}
