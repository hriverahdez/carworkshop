import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MaintenanceCategory } from "../../models/maintenance-category.model";
import { Maintenance } from "../../models/maintenance.model";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "cws-maintenance-form",
  templateUrl: "./maintenance-form.component.html",
  styleUrls: ["./maintenance-form.component.css"]
})
export class MaintenanceFormComponent implements OnInit {
  @Input() maintenanceCategories: MaintenanceCategory[];
  @Input() maintenance: Maintenance;
  @Input() carId: string | number;

  @Output() onCreate = new EventEmitter<Maintenance>();

  maintenanceForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.maintenanceForm = this.toFormGroup();
  }

  get formInvalid() {
    const dateControl = this.maintenanceForm.get("date") as FormControl;
    const mileageControl = this.maintenanceForm.get("mileage") as FormControl;

    return dateControl.value === "" && mileageControl.value === "";
  }

  save(form: FormGroup) {
    const { valid, value } = form;

    if (valid) {
      this.onCreate.emit({
        ...value,
        date: this.convertDate(value.date),
        categoryId: value.category.id
      });
    }
  }

  convertDate(date: { year: number; month: number; day: number }) {
    const _date = new Date(date.year, date.month, date.day);
    return _date.toISOString();
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      carId: [this.carId],
      category: [null, Validators.required],
      date: [""],
      mileage: ["", Validators.pattern(/^[0-9]+$/)]
    });
  }
}
