import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { Client } from "../../models/client.model";

@Component({
  selector: "cws-mechanic-home",
  templateUrl: "./mechanic-home.component.html",
  styleUrls: ["./mechanic-home.component.css"]
})
export class MechanicHomeComponent implements OnInit {
  clients$: Observable<Client[]>;

  constructor(private store: Store<fromStore.ClientsState>) {}

  ngOnInit() {
    this.clients$ = this.store.select(fromStore.selectAllClients);
    this.store.dispatch(new fromStore.LoadClients());
  }

  fullname(client: Client) {
    return `${client.nombre} ${client.apellidos}`;
  }
}
