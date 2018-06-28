import { Component, OnInit, Input } from "@angular/core";
import { MaintenanceCategory } from "../../../admin/models/maintenance-category.model";

@Component({
  selector: "cws-maintenance-recommends",
  templateUrl: "./maintenance-recommends.component.html",
  styleUrls: ["./maintenance-recommends.component.css"]
})
export class MaintenanceRecommendsComponent implements OnInit {
  @Input() maintenanceCategories: MaintenanceCategory[];

  constructor() {}

  ngOnInit() {}
}
