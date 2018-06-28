import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { ClientsViewTypes } from "../../../@core/store/shared/ui-clients-view-types";
import { Observable } from "rxjs";

@Component({
  selector: "cws-clients-view-selector",
  templateUrl: "./clients-view-selector.component.html",
  styleUrls: ["./clients-view-selector.component.css"]
})
export class ClientsViewSelectorComponent implements OnInit {
  currentViewType$: Observable<ClientsViewTypes>;
  viewTypes = ClientsViewTypes;

  constructor(private uiStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.currentViewType$ = this.uiStore.select(fromRoot.selectClientsViewType);
  }

  changeViewType(type: ClientsViewTypes) {
    this.uiStore.dispatch(new fromRoot.SetClientsViewType(type));
  }
}
