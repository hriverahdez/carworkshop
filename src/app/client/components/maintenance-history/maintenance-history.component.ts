import { Component, OnInit, Input } from "@angular/core";
import { Maintenance } from "../../../admin/models/maintenance.model";
import { MaintenanceCategory } from "../../../admin/models/maintenance-category.model";

@Component({
  selector: "cws-maintenance-history",
  templateUrl: "./maintenance-history.component.html",
  styleUrls: ["./maintenance-history.component.css"]
})
export class MaintenanceHistoryComponent implements OnInit {
  @Input() maintenanceHistory: Maintenance[];
  @Input() maintenanceCategories: MaintenanceCategory[];

  currentFilter = null;

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

  //   get categories() {
  //     return this.maintenanceHistory
  //       ? this.maintenanceHistory
  //           .map(m => m.category)
  //           .reduce((acc: any[], item) => {
  //             return acc.find(i => i.name === item.name) ? acc : [...acc, item];
  //           }, [])
  //       : [];
  //   }
}
