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

  get commonCategories() {
    return [
      {
        id: 2,
        iconName: "filter",
        name: "Filtro de aceite"
      },
      {
        id: 3,
        iconName: "air-filter",
        name: "Filtro de aire"
      },
      {
        id: 4,
        iconName: "fuel-filter",
        name: "Filtro combustible"
      },
      {
        id: 5,
        iconName: "sparkplug",
        name: "Cambio Bujías"
      },
      {
        id: 7,
        iconName: "brake",
        name: "Frenos"
      },
      {
        id: 9,
        iconName: "levels-revision",
        name: "Puntos Básicos"
      },
      {
        id: 10,
        iconName: "full-revision",
        name: "Revisión Completa"
      },
      {
        id: 11,
        iconName: "inspection",
        name: "Inspección (VW)"
      }
    ];
  }
}
