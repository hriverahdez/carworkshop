import {
  Component,
  OnInit,
  Input,
  forwardRef,
  EventEmitter,
  Output,
  OnChanges
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
  @Input() value: MaintenanceCategory = null;

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
    this.value = selected ? selected : null;
    this.onSelectedCategory.emit(this.value);
    this.onTouch;
    this.onModelChange(this.value);
  }

  constructor() {}

  ngOnInit() {}

  compareFn(c1: MaintenanceCategory, c2: MaintenanceCategory): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
