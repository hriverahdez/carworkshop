import { Component, OnInit, Input } from "@angular/core";
import { Car } from "../../../admin/models/car.model";
import { Client } from "../../../admin/models/client.model";

@Component({
  selector: "cws-car-info-pane",
  templateUrl: "./car-info-pane.component.html",
  styleUrls: ["./car-info-pane.component.css"]
})
export class CarInfoPaneComponent implements OnInit {
  @Input() client: Client;

  constructor() {}

  ngOnInit() {}

  get car() {
    return this.client.car;
  }

  get fullname() {
    return `${this.client.firstName} ${this.client.lastName}`;
  }
}
