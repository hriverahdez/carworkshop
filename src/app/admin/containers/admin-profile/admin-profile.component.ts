import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { Observable } from "rxjs";
import { AuthUser } from "../../../@shared/models/auth-user.model";

@Component({
  selector: "cws-admin-profile",
  templateUrl: "./admin-profile.component.html",
  styleUrls: ["./admin-profile.component.css"]
})
export class AdminProfileComponent implements OnInit {
  currentUser$: Observable<AuthUser>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.currentUser$ = this.rootStore.select(fromRoot.selectCurrentUser);
  }

  onProfileSaved(user: AuthUser) {
    this.rootStore.dispatch(new fromRoot.UpdateUserProfile(user));
  }
}
