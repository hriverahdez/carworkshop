import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Client } from "../../../@core/models/client.model";

@Component({
  selector: "cws-client-profile-info",
  templateUrl: "./client-profile-info.component.html",
  styleUrls: ["./client-profile-info.component.css"]
})
export class ClientProfileInfoComponent implements OnInit {
  client$: Observable<Client>;

  constructor(private store: Store<fromStore.ClientState>) {}

  ngOnInit() {
    this.client$ = this.store.select(fromStore.selectClientData);
    this.store.dispatch(new fromStore.LoadClientData());
  }
}
