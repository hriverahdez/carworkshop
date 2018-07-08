import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";

@Component({
  selector: "cws-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  client$: Observable<Client>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.client$ = this.rootStore.select(fromRoot.selectActiveClient);
  }
}
