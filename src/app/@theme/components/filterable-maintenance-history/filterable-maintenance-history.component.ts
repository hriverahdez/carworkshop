import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-filterable-maintenance-history",
  templateUrl: "./filterable-maintenance-history.component.html",
  styleUrls: ["./filterable-maintenance-history.component.css"]
})
export class FilterableMaintenanceHistoryComponent implements OnInit {
  currentFilter = null;
  @Input() initialFilter;
  @Input() car: Car;

  @Input() maintenanceHistory: Maintenance[];
  @Input() maintenanceCategories: MaintenanceCategory[];

  @Input() userIsAdmin: boolean = false;

  @Output() onDeleteRequest = new EventEmitter<Maintenance>();

  constructor() {}

  ngOnInit() {
    if (this.initialFilter) {
      this.currentFilter = this.maintenanceCategories.find(
        c => c.id === +this.initialFilter
      );
    }
  }

  filterMaintenance(maintenance) {
    if (this.currentFilter) {
      return this.currentFilter.id !== maintenance.category.id;
    } else return false;
  }

  applyFilter(category) {
    this.currentFilter = category ? category : null;
  }

  requestDelete(maintenance) {
    this.onDeleteRequest.emit(maintenance);
  }
}
