import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthUser } from "../../../@shared/models/auth-user.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomValidator } from "../../../@shared/utils/custom-validation";

@Component({
  selector: "cws-admin-form",
  templateUrl: "./admin-form.component.html",
  styleUrls: ["./admin-form.component.css"]
})
export class AdminFormComponent implements OnInit {
  @Input() admin: AuthUser;
  @Output() saved = new EventEmitter<AuthUser>();

  adminForm: FormGroup = this.toFormGroup();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes): void {
    if (this.admin) {
      this.adminForm.patchValue(this.admin);
    }
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.saved.emit({
        ...value,
        password: value.passwordGroup.password
      });
    }
  }

  toFormGroup() {
    return this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      passwordGroup: this.fb.group(
        {
          password: ["", Validators.required],
          passwordRepeat: ["", Validators.required]
        },
        {
          validator: CustomValidator.childrenEqual
        }
      )
    });
  }
}
