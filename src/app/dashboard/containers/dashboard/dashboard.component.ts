import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Car } from "../../../@core/models/car.model";
import { PanelLink, PanelCategories } from "../../models/panel-link.model";

interface MainPanels {
  dataSheet?: PanelLink;
  nextMaintenances?: PanelLink;
  maintenanceHistory?: PanelLink;
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

  get commonCategories(): PanelCategories[] {
    return [
      {
        id: 2,
        iconName: "filter",
        name: "Filtro de aceite",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 2
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 2
          }
        }
      },
      {
        id: 3,
        iconName: "air-filter",
        name: "Filtro de aire",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 3
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 3
          }
        }
      },
      {
        id: 4,
        iconName: "fuel-filter",
        name: "Filtro combustible",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 4
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 4
          }
        }
      },
      {
        id: 5,
        iconName: "sparkplug",
        name: "Cambio Bujías",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 5
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 5
          }
        }
      },
      {
        id: 7,
        iconName: "brake",
        name: "Frenos",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 7
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 7
          }
        }
      },
      {
        id: 9,
        iconName: "levels-revision",
        name: "Puntos Básicos",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 9
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 9
          }
        }
      },
      {
        id: 10,
        iconName: "full-revision",
        name: "Revisión Completa",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 10
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 10
          }
        }
      },
      {
        id: 11,
        iconName: "inspection",
        name: "Inspección (VW)",
        mainLink: {
          url: "./maintenanceHistory",
          queryParams: {
            filter: 11
          }
        },
        supportLink: {
          text: "Añadir Mantenimiento",
          url: `../../../../addMaintenance/${this.car.id}`,
          queryParams: {
            category: 11
          }
        }
      }
    ];
  }
}
