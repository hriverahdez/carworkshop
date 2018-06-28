import {
  Component,
  OnInit,
  Input,
  forwardRef,
  EventEmitter,
  Output
} from "@angular/core";
import { MaintenanceCategory } from "../../../admin/models/maintenance-category.model";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

const MAINTENANCE_CATEGORIES_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MaintenanceCategorySelectorComponent),
  multi: true
};

@Component({
  selector: "cws-maintenance-category-selector",
  templateUrl: "./maintenance-category-selector.component.html",
  styleUrls: ["./maintenance-category-selector.component.css"],
  providers: [MAINTENANCE_CATEGORIES_ACCESSOR]
})
export class MaintenanceCategorySelectorComponent
  implements OnInit, ControlValueAccessor {
  value: MaintenanceCategory = null;

  private onTouch: Function;
  private onModelChange: Function;

  @Input() hasLabel: boolean = false;
  @Input() showDefault: boolean = true;
  @Input() label: string;
  @Input() categories: MaintenanceCategory[];
  @Output() onSelectedCategory = new EventEmitter();

  writeValue(value: MaintenanceCategory): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectCategory(selected) {
    this.value = selected;
    this.onSelectedCategory.emit(selected);
    this.onTouch;
    this.onModelChange(this.value);
  }

  constructor() {}

  ngOnInit() {}
}
