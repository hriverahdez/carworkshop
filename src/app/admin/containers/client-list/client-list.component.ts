import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Client } from "../../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import * as fromRoot from "../../../@core/store";
import { ClientsViewTypes } from "../../../@core/store/shared/ui-clients-view-types";
import { DialogService } from "../../../@shared/services";

@Component({
  selector: "cws-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.css"]
})
export class ClientListComponent implements OnInit, OnDestroy {
  clients$: Observable<Client[]>;
  isLoading$: Observable<boolean>;
  currentViewType$: Observable<ClientsViewTypes>;

  dialogSubs: Subscription;

  constructor(
    private store: Store<fromStore.AdminState>,
    private uiStore: Store<fromRoot.AppState>,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.isLoading$ = this.uiStore.select(fromRoot.selectAppIsLoading);
    this.currentViewType$ = this.uiStore.select(fromRoot.selectClientsViewType);
    this.clients$ = this.store.select(fromStore.selectAllClients);
    this.store.dispatch(new fromStore.LoadClients());
  }

  deleteClient(client: Client) {
    this.dialogSubs = this.dialogService
      .confirm({
        message: "¿Está seguro que desea eliminar este cliente?",
        supportMessage: `
        ${client.firstName} ${client.lastName} 
        - Coche: ${client.car.brand} ${client.car.model}`,
        title: "Eliminar Cliente"
      })
      .subscribe(
        dialogResult =>
          dialogResult
            ? this.store.dispatch(new fromStore.DeleteClient(client))
            : null
      );
  }

  ngOnDestroy(): void {
    this.dialogSubs ? this.dialogSubs.unsubscribe : null;
  }
}
