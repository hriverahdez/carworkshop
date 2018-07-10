import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import * as fromAdmin from "../../../admin/store";
import { switchMap } from "rxjs/operators";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Car } from "../../../@core/models/car.model";
import { DialogService } from "../../../@shared/services";

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

  dialogSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private rootStore: Store<fromRoot.AppState>,
    private adminStore: Store<fromAdmin.AdminState>,
    private dialogService: DialogService
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

  deleteMaintenance(maintenance: Maintenance) {
    const maintenanceDate = new Date(maintenance.date);
    const formattedDate = `${maintenanceDate.getDate()}/${maintenanceDate.getMonth()}/${maintenanceDate.getFullYear()}`;
    const supportMessage = `
        ${maintenance.category.name} - 
        Realizado a los ${maintenance.mileage} Km.
        , el día ${formattedDate}
    `;

    this.dialogSubs = this.dialogService
      .confirm({
        message: "¿Está seguro que desea eliminar este mantenimiento?",
        supportMessage,
        title: "Eliminar Mantenimiento"
      })
      .subscribe(
        dialogResult =>
          dialogResult
            ? this.adminStore.dispatch(
                new fromAdmin.DeleteMaintenance(maintenance)
              )
            : null
      );
  }
}
