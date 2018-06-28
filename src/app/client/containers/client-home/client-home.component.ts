import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { Client } from "../../../admin/models/client.model";
import { Maintenance } from "../../../admin/models/maintenance.model";

@Component({
  selector: "cws-client-home",
  templateUrl: "./client-home.component.html",
  styleUrls: ["./client-home.component.css"]
})
export class ClientHomeComponent implements OnInit {
  client$: Observable<Client>;
  maintenances$: Observable<Maintenance[]>;

  constructor(private store: Store<fromStore.ClientState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadClientData());
    this.client$ = this.store.select(fromStore.selectClientData);
    this.maintenances$ = this.store.select(fromStore.selectClientMaintenances);
  }
}
