import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Car } from "../../../admin/models/car.model";

@Component({
  selector: "cws-next-maintenances",
  templateUrl: "./next-maintenances.component.html",
  styleUrls: ["./next-maintenances.component.css"]
})
export class NextMaintenancesComponent implements OnInit {
  @Input() userIsAdmin: boolean = false;
  @Input() car: Car;

  constructor() {}

  ngOnInit() {}
}
