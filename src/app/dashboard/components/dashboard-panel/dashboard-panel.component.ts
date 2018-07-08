import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cws-dashboard-panel",
  templateUrl: "./dashboard-panel.component.html",
  styleUrls: ["./dashboard-panel.component.css"]
})
export class DashboardPanelComponent implements OnInit {
  @Input() mainText: string;

  @Input() hasIcon: boolean = false;
  @Input() iconName: string;

  @Input() hasMainLink: boolean = false;
  @Input() mainLinkUrl: string;

  @Input() hasSupportText: boolean = false;
  @Input() supportText: string;

  @Input() hasSupportLink: boolean = false;
  @Input() supportLinkText: string;
  @Input() supportLinkUrl: string;

  constructor() {}

  ngOnInit() {}

  get mainLinkNoExtras() {
    if (this.hasMainLink) {
      const extras = this.mainLinkUrl.split("?filter=")[0];
      return extras;
    }
  }

  get mainLinkRouteExtras() {
    if (this.hasMainLink) {
      const extras = this.mainLinkUrl.split("?filter=")[1];
      return extras;
    }
  }
}
