import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";

@Component({
  selector: "cws-client-home",
  templateUrl: "./client-home.component.html",
  styleUrls: ["./client-home.component.css"]
})
export class ClientHomeComponent implements OnInit {
  client$: Observable<Client>;
  maintenances$: Observable<Maintenance[]>;
  maintenanceCategories$: Observable<MaintenanceCategory[]>;

  constructor(private store: Store<fromStore.ClientState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadClientData());
    this.client$ = this.store.select(fromStore.selectClientData);
    this.maintenances$ = this.store.select(fromStore.selectClientMaintenances);
    this.maintenanceCategories$ = this.store.select(
      fromStore.selectActiveCategories
    );
  }
}
