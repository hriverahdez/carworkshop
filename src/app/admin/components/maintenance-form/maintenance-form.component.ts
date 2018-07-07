import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

import { BsLocaleService } from "ngx-bootstrap/datepicker";
import { MaintenanceCategory } from "../../../@core/models/maintenance-category.model";
import { Maintenance } from "../../../@core/models/maintenance.model";

@Component({
  selector: "cws-maintenance-form",
  templateUrl: "./maintenance-form.component.html",
  styleUrls: ["./maintenance-form.component.css"]
})
export class MaintenanceFormComponent implements OnInit, OnChanges {
  isEdit: boolean = false;

  @Input() maintenanceCategories: MaintenanceCategory[];
  @Input() maintenance: Maintenance;
  @Input() carId: string | number;

  @Output() onCreate = new EventEmitter<Maintenance>();
  @Output() onUpdate = new EventEmitter<Maintenance>();

  maintenanceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localeService: BsLocaleService
  ) {}

  ngOnInit() {
    this.localeService.use("es");
  }

  ngOnChanges(changes): void {
    this.maintenanceForm = this.toFormGroup();
    if (this.maintenance) {
      this.isEdit = true;
      this.maintenanceForm.patchValue({
        ...this.maintenance,
        date: new Date(this.maintenance.date)
      });
    }
  }

  get formInvalid() {
    const dateControl = this.maintenanceForm.get("date") as FormControl;
    const mileageControl = this.maintenanceForm.get("mileage") as FormControl;

    return dateControl.value === "" && mileageControl.value === "";
  }

  get maintenanceCategory() {
    return this.maintenanceForm.get("category").value;
  }

  save(form: FormGroup) {
    const { valid, value } = form;

    // console.log(form);
    if (valid) {
      if (!this.isEdit) {
        this.onCreate.emit({
          ...value,
          categoryId: value.category.id
        });
        // console.log("VALUE ADD::", value);
      } else {
        // console.log("VALUE EDI::", value);
        this.onUpdate.emit({
          id: this.maintenance.id,
          ...value,
          categoryId: value.category.id
        });
      }
    }
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      carId: [this.carId],
      category: [null, Validators.required],
      date: [null, Validators.required],
      mileage: ["", [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }
}
