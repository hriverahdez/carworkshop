import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Client } from "../../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { MaintenanceCategory } from "../../models/maintenance-category.model";
import { Maintenance } from "../../models/maintenance.model";
import { withLatestFrom, switchMap, map } from "rxjs/operators";
import { DialogService } from "../../../@shared/services";

@Component({
  selector: "cws-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.css"]
})
export class ClientDetailsComponent implements OnInit {
  client$: Observable<Client>;
  allMaintenances$: Observable<Maintenance[]>;
  clientMaintenances$: Observable<Maintenance[]>;
  maintenanceCategories$: Observable<Maintenance[]>;

  dialogSubs: Subscription;

  constructor(
    private store: Store<fromStore.AdminState>,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.client$ = this.store.select(fromStore.selectCurrentClient);
    this.allMaintenances$ = this.store.select(fromStore.selectAllMaintenances);

    this.clientMaintenances$ = this.allMaintenances$.pipe(
      withLatestFrom(this.client$),
      map(([maintenances, client]) =>
        maintenances.filter(m => client.car.id === m["carId"])
      )
    );

    this.maintenanceCategories$ = this.store.select(
      fromStore.selectMaintenanceCategories
    );
    this.store.dispatch(new fromStore.LoadClientMaintenances(this.client$));
  }

  deleteMaintenance(maintenance: Maintenance) {
    let supportMessage = `${maintenance.category.name}: `;
    supportMessage += maintenance.date
      ? `Con fecha de ${maintenance.date}.`
      : "";
    supportMessage += maintenance.mileage
      ? `A los ${maintenance.mileage} Km.`
      : "";

    this.dialogSubs = this.dialogService
      .confirm({
        message: "¿Está seguro que desea eliminar este mantenimiento?",
        supportMessage,
        title: "Eliminar Mantenimiento"
      })
      .subscribe(
        dialogResult =>
          dialogResult
            ? this.store.dispatch(new fromStore.DeleteMaintenance(maintenance))
            : null
      );
  }
}
