import { Component, OnInit, Input } from "@angular/core";
import { Maintenance } from "../../../admin/models/maintenance.model";

@Component({
  selector: "cws-maintenance-history",
  templateUrl: "./maintenance-history.component.html",
  styleUrls: ["./maintenance-history.component.css"]
})
export class MaintenanceHistoryComponent implements OnInit {
  @Input() maintenanceHistory: Maintenance[];

  currentFilter = "";

  constructor() {}

  ngOnInit() {}

  filterMaintenance(maintenance) {
    if (this.currentFilter !== "")
      return this.currentFilter !== maintenance.category.name;
    else return false;
  }

  get categories() {
    return this.maintenanceHistory
      .map(m => m.category)
      .reduce((acc: any[], item) => {
        return acc.find(i => i.name === item.name) ? acc : [...acc, item];
      }, []);
  }
}
