import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
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
  car$: Observable<Car>;
  maintenances$: Observable<Maintenance[]>;
  currentUserIsAdmin$: Observable<boolean>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.currentUserIsAdmin$ = this.rootStore.select(
      fromRoot.selectCurrentUserIsAdmin
    );

    this.car$ = this.rootStore.select(fromRoot.selectActiveClientCar);

    this.maintenances$ = this.currentUserIsAdmin$.pipe(
      switchMap(isAdmin => {
        return isAdmin
          ? this.rootStore.select(
              fromRoot.selectActiveClientMaintenancesAsAdmin
            )
          : this.rootStore.select(fromRoot.selectActiveClientMaintenances);
      })
    );
  }
}
