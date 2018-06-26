import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client, ClientType } from "../../../admin/models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

@Component({
  selector: "cws-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  client$: Observable<Client>;

  constructor(private store: Store<fromStore.ClientState>) {}

  ngOnInit() {
    this.client$ = this.store.select(fromStore.selectClientData);
    this.store.dispatch(new fromStore.LoadClientData());
  }
}
