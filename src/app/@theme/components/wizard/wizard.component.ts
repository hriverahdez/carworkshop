import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  QueryList,
  ContentChildren,
  ComponentFactoryResolver
} from "@angular/core";
import { WizardStepComponent } from "../wizard-step/wizard-step.component";

@Component({
  selector: "cws-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.css"]
})
export class WizardComponent implements OnInit {
  @Input() canGoNext: boolean = true;
  @Input() canGoBack: boolean = true;

  @Input() canFinish: boolean = true;
  @Output() finished = new EventEmitter();

  @Input() hasCancelButton: boolean = false;
  @Output() canceled = new EventEmitter();

  isFirstStep: boolean = true;
  isLastStep: boolean;

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    this.steps.toArray()[0].active = true;
  }

  ngOnInit() {}

  nextStep() {
    const activeIdx = this.steps.toArray().findIndex(s => s.active);
    this.steps.toArray()[activeIdx].active = false;
    this.steps.toArray()[activeIdx + 1].active = true;

    this.isLastStep =
      this.steps.toArray().findIndex(s => s.active) === this.steps.length - 1;

    if (this.steps.toArray().findIndex(s => s.active) !== 0) {
      this.isFirstStep = false;
    }
  }

  prevStep() {
    const activeIdx = this.steps.toArray().findIndex(s => s.active);
    this.steps.toArray()[activeIdx].active = false;
    this.steps.toArray()[activeIdx - 1].active = true;
    this.isFirstStep = this.steps.toArray().findIndex(s => s.active) === 0;

    if (
      this.steps.toArray().findIndex(s => s.active) !==
      this.steps.toArray().length - 1
    ) {
      this.isLastStep = false;
    }
  }

  finish() {
    this.finished.emit();
  }

  cancel() {
    this.canceled.emit();
  }
}
