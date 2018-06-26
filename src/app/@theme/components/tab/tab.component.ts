import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cws-tab",
  template: `
    <div class="tab-pane active" [hidden]="!active" role="tabpanel">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ["./tab.component.css"]
})
export class TabComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() hasBadge: boolean = false;
  @Input() active: boolean = false;

  constructor() {}

  ngOnInit() {}
}
