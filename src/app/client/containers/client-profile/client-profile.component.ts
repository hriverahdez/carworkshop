import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Client } from "../../../@core/models/client.model";

@Component({
  selector: "cws-client-profile",
  templateUrl: "./client-profile.component.html",
  styleUrls: ["./client-profile.component.css"]
})
export class ClientProfileComponent implements OnInit {
  client$: Observable<Client>;

  constructor(private store: Store<fromStore.ClientState>) {}

  ngOnInit() {
    this.client$ = this.store.select(fromStore.selectClientData);
    this.store.dispatch(new fromStore.LoadClientData());
  }

  onProfileSaved(client) {
    // console.log("CLIENT::", client);
    this.store.dispatch(new fromStore.UpdateProfile(client));
  }
}
