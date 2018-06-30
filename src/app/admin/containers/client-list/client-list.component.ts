import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Client } from "../../models/client.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import * as fromRoot from "../../../@core/store";
import { ClientsViewTypes } from "../../../@core/store/shared/ui-clients-view-types";
import { DialogService } from "../../../@shared/services";
import { MaintenancesHelperService } from "../../services";

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
    this.isLoading$ = this.uiStore.select(fromRoot.selectAppIsLoadingBox);
    this.currentViewType$ = this.uiStore.select(fromRoot.selectClientsViewType);
    this.clients$ = this.store.select(fromStore.selectAllClients);
    this.store.dispatch(new fromStore.LoadClients());
    // this.store.dispatch(new fromStore.LoadMaintenanceCategories());
  }

  checkClient(client) {
    this.store.dispatch(new fromStore.SetActiveClient(client));
    this.uiStore.dispatch(
      new fromRoot.Go({ path: ["/app/admin/details", client.id] })
    );
  }

  deleteClient(client: Client) {
    const supportMessage = `
        ${client.firstName} ${client.lastName} 
        - Coche: ${client.car.brand} ${client.car.model}
    `;

    this.dialogSubs = this.dialogService
      .confirm({
        message: "¿Está seguro que desea eliminar este cliente?",
        supportMessage,
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
