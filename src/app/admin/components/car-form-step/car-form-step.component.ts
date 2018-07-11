import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../../../@core/models/car.model";

@Component({
  selector: "cws-car-form-step",
  templateUrl: "./car-form-step.component.html",
  styleUrls: ["./car-form-step.component.css"]
})
export class CarFormStepComponent implements OnInit {
  @Input() car: Car;
  @Input() parent: FormGroup;
  carForm: FormGroup = this.toFormGroup();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.parent.addControl("car", this.carForm);
  }

  ngOnChanges(changes): void {
    if (this.car) {
      this.carForm.patchValue(this.patchCarWithCorrectDates(this.car));
    }
  }

  patchCarWithCorrectDates(car: Car) {
    const firstRegistration = car.firstRegistration
      ? new Date(car.firstRegistration)
      : car.firstRegistration;

    return {
      ...car,
      firstRegistration
    };
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      plateNumber: ["", Validators.required],
      plateNumberIsVisible: [true],
      brand: ["", Validators.required],
      brandIsVisible: [true],
      model: ["", Validators.required],
      modelIsVisible: [true],
      variant: [""],
      variantIsVisible: [false],
      type: [""],
      typeIsVisible: [false],
      version: [""],
      versionIsVisible: [false],
      firstRegistration: [new Date()],
      firstRegistrationIsVisible: [false],
      vinNumber: [""],
      vinNumberIsVisible: [false],
      fuel: [""],
      fuelIsVisible: [false],
      engineBrand: [""],
      engineBrandIsVisible: [false],
      engineCode: [""],
      engineCodeIsVisible: [false],
      cilinderAmount: [""],
      cilinderAmountIsVisible: [false],
      cilinderVolume: [""],
      cilinderVolumeIsVisible: [false],
      potencyKW: [""],
      potencyKWIsVisible: [false],
      potencyCV: [""],
      potencyCVIsVisible: [false],
      tires: [""],
      tiresIsVisible: [false],
      category: [""],
      categoryIsVisible: [false],
      emisionLevel: [""],
      emisionLevelIsVisible: [false],
      radioCode: [""],
      radioCodeIsVisible: [false],
      keyCode: [""],
      keyCodeIsVisible: [false],
      maintenanceReset: [""],
      maintenanceResetIsVisible: [false],
      observations: [""],
      observationsIsVisible: [false]
    });
  }
}
