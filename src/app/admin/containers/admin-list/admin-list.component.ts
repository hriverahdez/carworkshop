import { Component, OnInit } from "@angular/core";

import * as fromRoot from "../../../@core/store";
import * as fromStore from "../../store";
import { Store } from "@ngrx/store";
import { AuthUser } from "../../../@shared/models/auth-user.model";
import { Observable, Subscription } from "rxjs";
import { DialogService } from "../../../@shared/services";

@Component({
  selector: "cws-admin-list",
  templateUrl: "./admin-list.component.html",
  styleUrls: ["./admin-list.component.css"]
})
export class AdminListComponent implements OnInit {
  admins$: Observable<AuthUser[]>;
  currentUser$: Observable<AuthUser>;

  dialogSubs: Subscription;

  constructor(
    private store: Store<fromStore.AdminState>,
    private rootStore: Store<fromRoot.AppState>,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.currentUser$ = this.rootStore.select(fromRoot.selectCurrentUser);
    this.admins$ = this.store.select(fromStore.selectAllAdmins);
    this.store.dispatch(new fromStore.LoadAdmins());
  }

  delete(admin: AuthUser) {
    this.dialogSubs = this.dialogService
      .confirm({
        message: "¿Está seguro que desea eliminar este administrador?",
        title: " "
      })
      .subscribe(
        dialogResult =>
          dialogResult
            ? this.store.dispatch(new fromStore.DeleteAdmin(admin))
            : null
      );
  }
}
