import { Component, OnInit, Input } from "@angular/core";
import { Car } from "../../../admin/models/car.model";

@Component({
  selector: "cws-client-data-sheet",
  templateUrl: "./client-data-sheet.component.html",
  styleUrls: ["./client-data-sheet.component.css"]
})
export class ClientDataSheetComponent implements OnInit {
  @Input() car: Car;

  constructor() {}

  ngOnInit() {}
}
