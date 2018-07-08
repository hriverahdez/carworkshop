import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";

@Component({
  selector: "cws-dashboard-layout",
  templateUrl: "./dashboard-layout.component.html",
  styleUrls: ["./dashboard-layout.component.css"]
})
export class DashboardLayoutComponent implements OnInit {
  client$: Observable<Client>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.client$ = this.rootStore.select(fromRoot.selectActiveClient);
  }
}
