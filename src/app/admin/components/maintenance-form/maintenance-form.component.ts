import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { MaintenanceCategory } from "../../models/maintenance-category.model";
import { Maintenance } from "../../models/maintenance.model";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import {
  NgbDateParserFormatter,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";

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
    private dateFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit() {}

  ngOnChanges(changes): void {
    this.maintenanceForm = this.toFormGroup();
    if (this.maintenance) {
      this.isEdit = true;
      //   console.log("FORM BEF::", this.maintenanceForm);
      this.maintenanceForm.patchValue(this.maintenance);
      this.patchDate();
      //   console.log("FORM AFT::", this.maintenanceForm);
    }
  }

  patchDate() {
    if (Date.parse(this.maintenance.date)) {
      const date = new Date(this.maintenance.date);

      const value = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      };
      this.maintenanceForm.get("date").setValue(value);
      return value;
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
          date: this.convertDate(value.date),
          categoryId: value.category.id
        });
        // console.log("VALUE ADD::", value);
      } else {
        // console.log("VALUE EDI::", value);
        this.onUpdate.emit({
          id: this.maintenance.id,
          ...value,
          date: this.convertDate(value.date),
          categoryId: value.category.id
        });
      }
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
      date: [null],
      mileage: ["", Validators.pattern(/^[0-9]+$/)]
    });
  }
}
