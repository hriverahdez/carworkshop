import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import { Observable, Subscription } from "rxjs";
import { Client } from "../../../@core/models/client.model";
import { Car } from "../../../@core/models/car.model";
import { FileDownloadHelperService } from "../../../@core/services/file-download-helper.service";

@Component({
  selector: "cws-data-sheet",
  templateUrl: "./data-sheet.component.html",
  styleUrls: ["./data-sheet.component.css"]
})
export class DataSheetComponent implements OnInit, OnDestroy {
  activeClientSubs$: Subscription;
  activeClientCar$: Observable<Car>;

  activeClientID;

  downloadInProgress$: Observable<boolean>;

  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private fdHelper: FileDownloadHelperService
  ) {}

  ngOnInit() {
    this.activeClientSubs$ = this.rootStore
      .select(fromRoot.selectActiveClient)
      .subscribe(c => (this.activeClientID = c.id));

    this.activeClientCar$ = this.rootStore.select(
      fromRoot.selectActiveClientCar
    );

    this.downloadInProgress$ = this.rootStore.select(
      fromRoot.selectSharedStateLoading
    );
  }

  onDownloadDatasheet() {
    // this.fdHelper.getFile(
    //   `maintenancesDatasheet/${this.activeClientID}`,
    //   "Ficha mía.pdf"
    // );
    this.rootStore.dispatch(new fromRoot.DownloadClientDatasheet());
  }

  ngOnDestroy() {
    if (this.activeClientSubs$) this.activeClientSubs$.unsubscribe();
  }
}
