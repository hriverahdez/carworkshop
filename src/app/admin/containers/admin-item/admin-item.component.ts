import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { AuthUser } from "../../../@shared/models/auth-user.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store/";
import { tap } from "rxjs/operators";

@Component({
  selector: "cws-admin-item",
  templateUrl: "./admin-item.component.html",
  styleUrls: ["./admin-item.component.css"]
})
export class AdminItemComponent implements OnInit {
  admin$: Observable<AuthUser>;

  constructor(private store: Store<fromStore.AdminState>) {}

  ngOnInit() {
    this.admin$ = this.store
      .select(fromStore.selectCurrentAdmin)
      .pipe(tap((admin: AuthUser = null) => admin));
  }

  onCreateAdmin(admin: AuthUser) {
    this.store.dispatch(new fromStore.AddAdmin(admin));
  }
}
