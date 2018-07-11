import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cws-wizard-step",
  template: `
    <div class="tab-pane" [hidden]="!active" role="tabpanel">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ["./wizard-step.component.css"]
})
export class WizardStepComponent implements OnInit {
  @Input() active: boolean = false;

  constructor() {}

  ngOnInit() {}
}
