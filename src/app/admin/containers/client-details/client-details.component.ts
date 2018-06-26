import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

@Component({
  selector: "cws-client-details",
  templateUrl: "./client-details.component.html",
  //   template: `
  //     <cws-client-data-sheet [client]="client$ | async"></cws-client-data-sheet>
  //   `,
  styleUrls: ["./client-details.component.css"]
})
export class ClientDetailsComponent implements OnInit {
  client$: Observable<Client>;

  constructor(private store: Store<fromStore.ClientsState>) {}

  ngOnInit() {
    this.client$ = this.store.select(fromStore.selectCurrentClient);
  }
}
