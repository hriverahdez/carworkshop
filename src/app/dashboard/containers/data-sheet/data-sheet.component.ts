import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromRoot from "../../../@core/store";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-data-sheet",
  templateUrl: "./data-sheet.component.html",
  styleUrls: ["./data-sheet.component.css"]
})
export class DataSheetComponent implements OnInit {
  activeClientCar$: Observable<Car>;

  downloadInProgress$: Observable<boolean>;
  userIsAdmin$: Observable<boolean>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.userIsAdmin$ = this.rootStore.select(
      fromRoot.selectCurrentUserIsAdmin
    );

    this.activeClientCar$ = this.rootStore.select(
      fromRoot.selectActiveClientCar
    );

    this.downloadInProgress$ = this.rootStore.select(
      fromRoot.selectSharedStateLoading
    );
  }

  onDownloadDatasheet() {
    this.rootStore.dispatch(new fromRoot.DownloadClientDatasheet());
  }
}
