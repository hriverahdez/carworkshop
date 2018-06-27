import { Component, OnInit, Input } from "@angular/core";
import { Car } from "../../../admin/models/car.model";

@Component({
  selector: "cws-client-data-sheet",
  templateUrl: "./client-data-sheet.component.html",
  styleUrls: ["./client-data-sheet.component.css"]
})
export class ClientDataSheetComponent implements OnInit {
  @Input() car: Car;
  @Input() userIsAdmin: boolean = false;

  constructor() {}

  ngOnInit() {}

  fieldIsVisible(fieldName: string) {
    if (this.car) return true;
    // console.log("Car::", this.car);
    // console.log("Field:", fieldName);
    // console.log("On car:", this.car["fieldName"]);
    // if (this.userIsAdmin) return true;
    // return (
    //   this.car && this.car["fieldName"] && this.car[`${fieldName}IsVisible`]
    // );
  }
}
