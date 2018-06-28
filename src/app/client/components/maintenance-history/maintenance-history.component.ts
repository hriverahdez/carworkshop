import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Maintenance } from "../../../admin/models/maintenance.model";
import { MaintenanceCategory } from "../../../admin/models/maintenance-category.model";

@Component({
  selector: "cws-maintenance-history",
  templateUrl: "./maintenance-history.component.html",
  styleUrls: ["./maintenance-history.component.css"]
})
export class MaintenanceHistoryComponent implements OnInit {
  currentFilter = null;

  @Input() maintenanceHistory: Maintenance[];
  @Input() maintenanceCategories: MaintenanceCategory[];

  @Input() userIsAdmin: boolean = false;
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

  requestDelete(maintenance) {
    this.onDeleteRequest.emit(maintenance);
  }
}
