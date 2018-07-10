import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import * as fromRoot from "../../../@core/store";
import { ClientsViewTypes } from "../../../@core/shared/ui-clients-view-types";
import { DialogService } from "../../../@shared/services";
import { Client } from "../../../@core/models/client.model";
import { PageChangedEvent } from "ngx-bootstrap";
import { Pagination } from "../../../@core/models/pagination.model";

@Component({
  selector: "cws-client-list",
  templateUrl: "./client-list.component.html",
  styleUrls: ["./client-list.component.css"]
})
export class ClientListComponent implements OnInit, OnDestroy {
  clients$: Observable<Client[]>;
  paginatedClients$: Observable<Client[]>;
  isLoading$: Observable<boolean>;
  currentViewType$: Observable<ClientsViewTypes>;

  dialogSubs: Subscription;

  totalClients$: Observable<number>;
  pageSize$: Observable<number>;
  activePage$: Observable<number>;

  constructor(
    private store: Store<fromStore.AdminState>,
    private rootStore: Store<fromRoot.AppState>,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.isLoading$ = this.rootStore.select(fromRoot.selectAppIsLoadingBox);
    this.currentViewType$ = this.rootStore.select(
      fromRoot.selectClientsViewType
    );
    this.clients$ = this.store.select(fromStore.selectAllClients);

    this.paginatedClients$ = this.store.select(
      fromStore.selectPaginatedClients
    );

    this.totalClients$ = this.store.select(fromStore.selectClientTotal);
    this.pageSize$ = this.store.select(fromStore.selectClientsPaginationSize);
    this.activePage$ = this.store.select(fromStore.selectClientsActivePage);

    this.store.dispatch(new fromStore.LoadClients());
  }

  checkClient(client) {
    this.rootStore.dispatch(new fromRoot.SetActiveClient(client));
    this.rootStore.dispatch(
      new fromRoot.Go({ path: ["/app/admin/details", client.id] })
    );
  }

  deleteClient(client: Client) {
    const supportMessage = `
        ${client.firstName} ${client.lastName} 
        - Coche: ${client.car.brand} ${client.car.model} 
        (${client.car.plateNumber})
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
    this.dialogSubs ? this.dialogSubs.unsubscribe() : null;
  }

  pageChanged(event: PageChangedEvent): void {
    const pagination: Pagination = {
      activePage: event.page,
      pageSize: event.itemsPerPage
    };

    this.store.dispatch(new fromStore.ChangePage(pagination));
  }
}
