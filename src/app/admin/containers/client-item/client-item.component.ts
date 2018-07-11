import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store/";
import * as fromRoot from "../../../@core/store/";
import { tap } from "rxjs/operators";
import { Client } from "../../../@core/models/client.model";

@Component({
  selector: "cws-client-item",
  templateUrl: "./client-item.component.html",
  styleUrls: ["./client-item.component.css"]
})
export class ClientItemComponent implements OnInit {
  client$: Observable<Client>;

  constructor(
    private store: Store<fromStore.AdminState>,
    private rootStore: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    this.client$ = this.store
      .select(fromStore.selectCurrentClient)
      .pipe(tap((client: Client = null) => client));
  }

  create(client: Client) {
    this.store.dispatch(new fromStore.AddClient(client));
  }

  update(client: Client) {
    this.store.dispatch(new fromStore.UpdateClient(client));
  }

  cancel() {
    this.rootStore.dispatch(new fromRoot.Back());
  }
}
