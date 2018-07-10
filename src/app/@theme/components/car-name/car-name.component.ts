import { Component, OnInit, Input } from "@angular/core";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-car-name",
  template: `
    <small class="small">{{ car.brand | uppercase }} {{ car.model | uppercase }} ({{ car.plateNumber | uppercase }})</small>
    `,
  styleUrls: ["./car-name.component.css"]
})
export class CarNameComponent implements OnInit {
  @Input() car: Car;

  constructor() {}

  ngOnInit() {}
}
