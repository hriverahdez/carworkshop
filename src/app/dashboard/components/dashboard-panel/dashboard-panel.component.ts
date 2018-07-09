import { Component, OnInit, Input } from "@angular/core";
import { PanelLink } from "../../models/panel-link.model";

@Component({
  selector: "cws-dashboard-panel",
  templateUrl: "./dashboard-panel.component.html",
  styleUrls: ["./dashboard-panel.component.css"]
})
export class DashboardPanelComponent implements OnInit {
  @Input() mainText: string;

  @Input() hasSupportText: boolean = false;
  @Input() supportText: string;

  @Input() hasIcon: boolean = false;
  @Input() iconName: string;

  @Input() hasMainLink: boolean = false;
  @Input() mainLink: PanelLink;

  @Input() hasSupportLink: boolean = false;
  @Input() supportLink: PanelLink;

  constructor() {}

  ngOnInit() {}
}
