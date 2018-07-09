import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from "@angular/core";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-client-data-sheet",
  templateUrl: "./client-data-sheet.component.html",
  styleUrls: ["./client-data-sheet.component.css"]
})
export class ClientDataSheetComponent implements OnInit {
  @Input() car: Car;
  @Input() userIsAdmin: boolean = false;
  @Input() downloadInProgress: boolean = false;
  @Output() downloadDataSheet = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  getReport() {
    this.downloadDataSheet.emit();
  }

  get modelVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.model && this.car.modelIsVisible;
  }

  get vinNumberVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.vinNumber && this.car.vinNumberIsVisible;
  }

  get variantVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.variant && this.car.variantIsVisible;
  }

  get typeVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.type && this.car.typeIsVisible;
  }

  get versionVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.version && this.car.versionIsVisible;
  }

  get engineBrandVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.engineBrand && this.car.engineBrandIsVisible;
  }

  get engineCodeVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.engineCode && this.car.engineCodeIsVisible;
  }

  get tiresVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.tires && this.car.tiresIsVisible;
  }

  get cilinderAmountVisible() {
    if (this.userIsAdmin) return true;
    return (
      this.car && this.car.cilinderAmount && this.car.cilinderAmountIsVisible
    );
  }

  get cilinderVolumeVisible() {
    if (this.userIsAdmin) return true;
    return (
      this.car && this.car.cilinderVolume && this.car.cilinderVolumeIsVisible
    );
  }

  get potencyKWVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.potencyKW && this.car.potencyKWIsVisible;
  }

  get potencyCVVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.potencyCV && this.car.potencyCVIsVisible;
  }

  get emisionLevelVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.emisionLevel && this.car.emisionLevelIsVisible;
  }

  get fuelVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.fuel && this.car.fuelIsVisible;
  }

  get radioCodeVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.radioCode && this.car.radioCodeIsVisible;
  }

  get keyCodeVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.keyCode && this.car.keyCodeIsVisible;
  }

  get observationsVisible() {
    if (this.userIsAdmin) return true;
    return this.car && this.car.observations && this.car.observationsIsVisible;
  }

  get maintenanceResetVisible() {
    if (this.userIsAdmin) return true;
    return (
      this.car &&
      this.car.maintenanceReset &&
      this.car.maintenanceResetIsVisible
    );
  }
}
