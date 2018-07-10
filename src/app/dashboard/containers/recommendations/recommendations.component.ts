import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/store";

@Component({
  selector: "cws-recommendations",
  templateUrl: "./recommendations.component.html",
  styleUrls: ["./recommendations.component.css"]
})
export class RecommendationsComponent implements OnInit {
  maintenanceCategories$: Observable<MaintenanceCategory[]>;

  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.maintenanceCategories$ = this.rootStore.select(
      fromRoot.selectMaintenanceCategories
    );
  }
}
