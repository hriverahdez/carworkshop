import { Component, OnInit } from "@angular/core";
import { Client } from "../../../@core/models/client.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-client-info",
  templateUrl: "./client-info.component.html",
  styleUrls: ["./client-info.component.css"]
})
export class ClientInfoComponent implements OnInit {
  client$: Observable<Client>;
  car$: Observable<Car>;
  currentUserIsAdmin$: Observable<boolean>;

  activeView = "PRIMARY";

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.client$ = this.rootStore.select(fromRoot.selectActiveClient);
    this.car$ = this.rootStore.select(fromRoot.selectActiveClientCar);
    this.currentUserIsAdmin$ = this.rootStore.select(
      fromRoot.selectCurrentUserIsAdmin
    );
  }
}
