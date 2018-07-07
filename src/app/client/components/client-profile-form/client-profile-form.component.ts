import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomValidator } from "../../../@shared/utils/custom-validation";
import { Client } from "../../../@core/models/client.model";

@Component({
  selector: "cws-client-profile-form",
  templateUrl: "./client-profile-form.component.html",
  styleUrls: ["./client-profile-form.component.css"]
})
export class ClientProfileFormComponent implements OnInit, OnChanges {
  @Input() currentUser: Client;
  @Output() savedProfile = new EventEmitter<Client>();

  userForm: FormGroup = this.toFormGroup();
  passwordGroup: FormGroup = this.getPasswordGroup();

  wantsPasswordChange: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes): void {
    if (this.currentUser) {
      //   this.userForm.patchValue(this.currentUser);
      this.userForm.get("firstName").setValue(this.currentUser.firstName);
      this.userForm.get("lastName").setValue(this.currentUser.lastName);
      this.userForm.get("email").setValue(this.currentUser.email);
    }
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.wantsPasswordChange
        ? this.savedProfile.emit({
            id: this.currentUser.id,
            ...value,
            password: value.passwordGroup.password
          })
        : this.savedProfile.emit({ ...value, id: this.currentUser.id });
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
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }
}
