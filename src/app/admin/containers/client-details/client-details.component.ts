import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { MaintenanceCategory } from "../../models/maintenance-category.model";

@Component({
  selector: "cws-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.css"]
})
export class ClientDetailsComponent implements OnInit {
  client$: Observable<Client>;
  maintenanceHistory$: Observable<MaintenanceCategory[]>;

  constructor(private store: Store<fromStore.AdminState>) {}

  ngOnInit() {
    this.client$ = this.store.select(fromStore.selectCurrentClient);
    this.maintenanceHistory$ = this.store.select(
      fromStore.selectAllMaintenances
    );
    this.store.dispatch(new fromStore.LoadClientMaintenances(this.client$));
  }
}
