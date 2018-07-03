import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { AuthUser } from "../../../@shared/models/auth-user.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomValidator } from "../../../@shared/utils/custom-validation";

@Component({
  selector: "cws-admin-profile-form",
  templateUrl: "./admin-profile-form.component.html",
  styleUrls: ["./admin-profile-form.component.css"]
})
export class AdminProfileFormComponent implements OnInit, OnChanges {
  @Input() currentUser: AuthUser;
  @Output() savedProfile = new EventEmitter<AuthUser>();

  userForm: FormGroup = this.toFormGroup();
  passwordGroup: FormGroup = this.getPasswordGroup();

  wantsPasswordChange: boolean = false;
  originalUsername: string = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes): void {
    if (this.currentUser) {
      this.originalUsername = this.currentUser.username;
      this.userForm.patchValue(this.currentUser);
    }
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      const user =
        this.originalUsername !== value.username || this.wantsPasswordChange
          ? { ...value, logout: true }
          : value;

      this.wantsPasswordChange
        ? this.savedProfile.emit({
            id: this.currentUser.id,
            ...user,
            password: value.passwordGroup.password
          })
        : this.savedProfile.emit({ ...user, id: this.currentUser.id });
    }
  }

  togglePasswordChange() {
    this.wantsPasswordChange = !this.wantsPasswordChange;
    this.wantsPasswordChange
      ? this.userForm.addControl("passwordGroup", this.passwordGroup)
      : this.userForm.removeControl("passwordGroup");
  }

  getPasswordGroup() {
    return this.fb.group(
      {
        password: ["", Validators.required],
        passwordRepeat: ["", Validators.required]
      },
      {
        validator: CustomValidator.childrenEqual
      }
    );
  }

  toFormGroup() {
    return this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }
}
