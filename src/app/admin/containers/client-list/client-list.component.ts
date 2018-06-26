import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import * as fromRoot from "../../../@core/store";
import { ClientsViewTypes } from "../../../@core/store/shared/ui-clients-view-types";

@Component({
  selector: "cws-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.css"]
})
export class ClientListComponent implements OnInit {
  clients$: Observable<Client[]>;
  currentViewType$: Observable<ClientsViewTypes>;

  constructor(
    private store: Store<fromStore.ClientsState>,
    private uiStore: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    this.currentViewType$ = this.uiStore.select(fromRoot.selectClientsViewType);
    this.clients$ = this.store.select(fromStore.selectAllClients);
    this.store.dispatch(new fromStore.LoadClients());
  }

  deleteClient(client: Client) {
    if (
      window.confirm(
        `¿Está seguro que desea eliminar a 
            ${client.firstName} ${client.lastName}?`
      )
    ) {
      this.store.dispatch(new fromStore.DeleteClient(client));
    }
  }
}
