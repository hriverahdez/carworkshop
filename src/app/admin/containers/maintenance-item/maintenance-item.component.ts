import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import * as fromRoot from "../../../@core/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Maintenance } from "../../../@core/models/maintenance.model";

@Component({
  selector: "cws-maintenance-item",
  templateUrl: "./maintenance-item.component.html",
  styleUrls: ["./maintenance-item.component.css"]
})
export class MaintenanceItemComponent implements OnInit {
  maintenanceCategories$: Observable<MaintenanceCategory[]>;
  carId;
  maintenance$: Observable<Maintenance>;
  initialCategory = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.AdminState>,
    private rootStore: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    if (this.route.snapshot.queryParams["category"]) {
      this.initialCategory = this.route.snapshot.queryParams["category"];
    }

    this.maintenance$ = this.store
      .select(fromStore.selectCurrentMaintenance)
      .pipe(tap((maintenance: Maintenance = null) => maintenance));

    this.carId = this.route.snapshot.paramMap.get("carId");
    this.maintenanceCategories$ = this.rootStore.select(
      fromRoot.selectMaintenanceCategories
    );
  }

  create(maintenance: Maintenance) {
    // console.log(maintenance);
    this.store.dispatch(new fromStore.AddMaintenance(maintenance));
  }

  update(maintenance: Maintenance) {
    // console.log(maintenance);
    this.store.dispatch(new fromStore.UpdateMaintenance(maintenance));
  }

  cancel() {
    this.rootStore.dispatch(new fromRoot.Back());
  }
}
