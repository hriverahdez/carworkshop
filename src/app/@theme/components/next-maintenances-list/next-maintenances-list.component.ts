import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Car } from "../../../@core/models/car.model";
import { Maintenance } from "../../../@core/models/maintenance.model";
import { MaintenancesHelperService } from "../../../@core/services/maintenances-helper.service";

@Component({
  selector: "cws-next-maintenances-list",
  templateUrl: "./next-maintenances-list.component.html",
  styleUrls: ["./next-maintenances-list.component.css"]
})
export class NextMaintenancesListComponent implements OnInit {
  @Input() userIsAdmin: boolean = false;
  @Input() car: Car;
  @Input() maintenances: Maintenance[];

  nextMaintenances: Maintenance[];

  constructor(private mHelper: MaintenancesHelperService) {}

  ngOnInit() {}

  ngOnChanges(changes): void {
    this.mHelper.initData(this.maintenances);

    this.nextMaintenances = this.mHelper.getNextMaintenancesByDate();

    /* Use this method if maintenances should be prioritized by mileage */
    // this.nextMaintenances = this.mHelper.getNextMaintenancesByMileage();
  }

  /**
   * Calculate time difference between the mantenance's date and today
   * and display it in a friendly format
   */
  timeLapse(maintenance: Maintenance) {
    const maintenanceDate = new Date(maintenance.date);
    const differenceUTC = maintenanceDate.valueOf() - Date.now();

    // 8640000 millisecs = 1 day
    const delta = Math.ceil(differenceUTC / 86400000);

    // If delta is 365 or more then difference is in years
    return delta >= 365 || delta <= -365
      ? this.differenceYears(Math.round(delta / 365))
      : this.differenceInDays(delta);
  }

  differenceInDays(delta) {
    const aliases = {
      "0": "Hoy",
      "1": "Mañana",
      "-1": "Ayer"
    };

    if (aliases[delta]) {
      return aliases[delta];
    }

    return delta > 0 ? `En ${delta} días` : `Hace ${delta * -1} días`;
  }

  differenceYears(delta) {
    const plurality = delta > 1 || delta < -1 ? "años" : "año";

    return delta > 0
      ? `En aprox. ${delta} ${plurality}`
      : `Hace aprox. ${delta * -1} ${plurality}`;
  }
}
