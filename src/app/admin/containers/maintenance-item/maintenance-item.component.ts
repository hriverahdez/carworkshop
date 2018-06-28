import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { MaintenanceCategory } from "../../models/maintenance-category.model";
import { Maintenance } from "../../models/maintenance.model";

@Component({
  selector: "cws-maintenance-item",
  templateUrl: "./maintenance-item.component.html",
  styleUrls: ["./maintenance-item.component.css"]
})
export class MaintenanceItemComponent implements OnInit {
  maintenanceCategories$: Observable<MaintenanceCategory[]>;
  carId;
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.AdminState>
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.paramMap.get("carId"));
    this.carId = this.route.snapshot.paramMap.get("carId");
    this.maintenanceCategories$ = this.store.select(
      fromStore.selectMaintenanceCategories
    );
  }

  create(maintenance: Maintenance) {
    console.log(maintenance);
    this.store.dispatch(new fromStore.AddMaintenance(maintenance));
  }
}
