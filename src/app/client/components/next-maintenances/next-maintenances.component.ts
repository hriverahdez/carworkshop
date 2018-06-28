import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges
} from "@angular/core";
import { Car } from "../../../admin/models/car.model";
import { Maintenance } from "../../../admin/models/maintenance.model";
import { MOCK_DATA } from "../../../admin/services/mock-data";
import { MaintenancesHelperService } from "../../../admin/services";

@Component({
  selector: "cws-next-maintenances",
  templateUrl: "./next-maintenances.component.html",
  styleUrls: ["./next-maintenances.component.css"]
})
export class NextMaintenancesComponent implements OnInit, OnChanges {
  @Input() userIsAdmin: boolean = false;
  @Input() car: Car;
  @Input() maintenances: Maintenance[];

  nextMaintenances: Maintenance[];

  constructor(private mHelper: MaintenancesHelperService) {}

  ngOnInit() {}

  ngOnChanges(changes): void {
    // this.mHelper.initData(this.maintenances);
    this.mHelper.initData(MOCK_DATA);

    this.nextMaintenances = this.mHelper.getNextMaintenancesByDate();
    // this.nextMaintenances = this.mHelper.getNextMaintenancesByMileage();
  }

  timeLapse(maintenance: Maintenance) {
    const maintenanceDate = new Date(maintenance.date);
    const differenceUTC = maintenanceDate.valueOf() - Date.now();
    // console.log("CALC:", differenceUTC / 86400000);
    const delta = Math.round(differenceUTC / 86400000);

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

    // console.log(delta);

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
