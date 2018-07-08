import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { Car } from "../../../@core/models/car.model";
import { AuthUser } from "../../../@shared/models/auth-user.model";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "cws-next-maintenances",
  templateUrl: "./next-maintenances.component.html",
  styleUrls: ["./next-maintenances.component.css"]
})
export class NextMaintenancesComponent implements OnInit {
  currentUser$: Observable<AuthUser>;
  car$: Observable<Car>;
  maintenances$: Observable<Maintenance[]>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.currentUser$ = this.rootStore.select(fromRoot.selectCurrentUser);
    this.car$ = this.rootStore.select(fromRoot.selectActiveClientCar);

    this.maintenances$ = this.currentUser$.pipe(
      switchMap((user: AuthUser) => {
        return user && user.role && user.role.name !== "client"
          ? this.rootStore.select(
              fromRoot.selectActiveClientMaintenancesAsAdmin
            )
          : this.rootStore.select(fromRoot.selectActiveClientMaintenances);
      })
    );
  }
}
