import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Car } from "../../../@core/models/car.model";
import { PanelLink, PanelCategories } from "../../models/panel-link.model";
import { getCommonCategories } from "./common-categories";

interface MainPanels {
  dataSheet?: PanelLink;
  nextMaintenances?: PanelLink;
  maintenanceHistory?: PanelLink;
  recommendations?: PanelLink;
}

@Component({
  selector: "cws-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  client$: Observable<Client>;
  car$: Observable<Car>;

  maintenanceCategories$: Observable<MaintenanceCategory[]>;
  currentUserIsAdmin$: Observable<boolean>;

  private car: Car;
  private carSubs: Subscription;

  mainPanels: MainPanels = {
    dataSheet: {
      text: "Ficha Técnica",
      url: "./dataSheet"
    },

    nextMaintenances: {
      url: "./nextMaintenances",
      text: "Ver"
    },

    maintenanceHistory: {
      url: "./maintenanceHistory",
      text: "Ver"
    },

    recommendations: {
      url: "./recommendations",
      text: "Ver"
    }
  };

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

    this.carSubs = this.car$.subscribe(c => (this.car = c));
  }

  ngOnDestroy(): void {
    this.carSubs.unsubscribe();
  }

  get commonCategories() {
    if (this.car && this.car.id) return getCommonCategories(this.car);
  }
}
