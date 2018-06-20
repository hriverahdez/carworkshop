import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store/";
import { tap } from "rxjs/operators";

@Component({
  selector: "cws-client-item",
  templateUrl: "./client-item.component.html",
  styleUrls: ["./client-item.component.css"]
})
export class ClientItemComponent implements OnInit {
  client$: Observable<Client>;

  constructor(private store: Store<fromStore.ClientsState>) {}

  ngOnInit() {
    this.client$ = this.store
      .select(fromStore.selectCurrentClient)
      .pipe(tap((client: Client = null) => client));
  }

  create(client: Client) {
    console.log("CLIENT::", client);
    this.store.dispatch(new fromStore.AddClient(client));
  }
}
