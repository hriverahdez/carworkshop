import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import * as fromRoot from "../../../@core/store";
import { Client } from "../../../@core/models/client.model";

@Component({
  selector: "cws-client-profile",
  templateUrl: "./client-profile.component.html",
  styleUrls: ["./client-profile.component.css"]
})
export class ClientProfileComponent implements OnInit {
  client$: Observable<Client>;

  constructor(
    private store: Store<fromStore.ClientState>,
    private rootStore: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    this.client$ = this.rootStore.select(fromRoot.selectActiveClient);
    this.store.dispatch(new fromStore.LoadClientData());
  }

  onProfileSaved(client) {
    this.store.dispatch(new fromStore.UpdateProfile(client));
  }
}
