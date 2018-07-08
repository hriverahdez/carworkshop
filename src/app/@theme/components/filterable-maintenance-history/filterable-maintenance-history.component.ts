import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";

@Component({
  selector: "cws-filterable-maintenance-history",
  templateUrl: "./filterable-maintenance-history.component.html",
  styleUrls: ["./filterable-maintenance-history.component.css"]
})
export class FilterableMaintenanceHistoryComponent implements OnInit {
  currentFilter = null;

  @Input() maintenanceHistory: Maintenance[];
  @Input() maintenanceCategories: MaintenanceCategory[];

  @Input() userIsAdmin: boolean = false;
  @Output() onEditRequest = new EventEmitter<Maintenance>();
  @Output() onDeleteRequest = new EventEmitter<Maintenance>();

  constructor() {}

  ngOnInit() {}

  filterMaintenance(maintenance) {
    if (this.currentFilter) {
      return this.currentFilter.id !== maintenance.category.id;
    } else return false;
  }

  applyFilter(category) {
    this.currentFilter = category ? category : null;
  }

  requestEdit(maintenance) {
    this.onEditRequest.emit(maintenance);
  }

  requestDelete(maintenance) {
    this.onDeleteRequest.emit(maintenance);
  }
}
