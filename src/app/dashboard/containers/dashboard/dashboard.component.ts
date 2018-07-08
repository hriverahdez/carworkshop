import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  client$: Observable<Client>;
  car$: Observable<Car>;
  maintenanceCategories$: Observable<MaintenanceCategory[]>;
  currentUserIsAdmin$: Observable<boolean>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.currentUserIsAdmin$ = this.rootStore.select(
      fromRoot.selectCurrentUserIsAdmin
    );

    this.client$ = this.rootStore.select(fromRoot.selectActiveClient);
    this.car$ = this.rootStore.select(fromRoot.selectActiveClientCar);

    this.maintenanceCategories$ = this.rootStore.select(
      fromRoot.selectMaintenanceCategories
    );
  }
}
