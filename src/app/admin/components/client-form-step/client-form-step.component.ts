import { Component, OnInit, Input, OnChanges } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Client } from "../../../@core/models/client.model";
import { CustomValidator } from "../../../@shared/utils/custom-validation";

@Component({
  selector: "cws-client-form-step",
  templateUrl: "./client-form-step.component.html",
  styleUrls: ["./client-form-step.component.css"]
})
export class ClientFormStepComponent implements OnInit, OnChanges {
  @Input() client: Client;
  @Input() parent: FormGroup;
  clientForm: FormGroup = this.toFormGroup();
  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.parent.addControl("client", this.clientForm);
  }

  ngOnChanges(changes): void {
    if (this.client) {
      this.isEdit = true;
      this.clientForm.patchValue(this.patchClientWithCorrectDates(this.client));
      this.clearPassValidation();
    }
  }

  patchClientWithCorrectDates(client: Client) {
    const birthday = client.birthday
      ? new Date(client.birthday)
      : client.birthday;

    const registrationDate = client.registrationDate
      ? new Date(client.registrationDate)
      : client.registrationDate;

    return {
      ...client,
      birthday,
      registrationDate
    };
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      type: ["HOMEUSER"],

      position: [""],
      positionIsVisible: [false],
      companyName: [""],
      companyNameIsVisible: [false],
      web: [""],
      webIsVisible: [false],
      socialMission: [""],
      socialMissionIsVisible: [false],

      firstName: ["", Validators.required],
      firstNameIsVisible: [true],
      lastName: ["", Validators.required],
      lastNameIsVisible: [true],
      registrationDate: [new Date()],
      registrationDateIsVisible: [false],
      email: ["", [Validators.required, Validators.email]],
      emailIsVisible: [false],
      passwordGroup: this.fb.group(
        {
          password: ["", Validators.required],
          passwordRepeat: ["", Validators.required]
        },
        {
          validator: CustomValidator.childrenEqual
        }
      ),
      dni: [""],
      dniIsVisible: [false],
      gender: ["M"],
      genderIsVisible: [false],
      birthday: [""],
      birthdayIsVisible: [false],
      address: [""],
      addressIsVisible: [false],
      locality: [""],
      localityIsVisible: [false],
      zipCode: [""],
      zipCodeIsVisible: [false],
      linkedTo: [""],
      linkedToIsVisible: [false],
      homePhone: [""],
      homePhoneIsVisible: [false],
      mobilePhone: [""],
      mobilePhoneIsVisible: [false],
      otherPhone: [""],
      otherPhoneIsVisible: [false]
    });
  }

  clearPassValidation() {
    const passGroup = this.clientForm.get("passwordGroup") as FormGroup;
    passGroup.clearValidators();
    passGroup.get("password").clearValidators();
    passGroup.get("passwordRepeat").clearValidators();
  }

  get clientType() {
    return this.clientForm.get("type") as FormControl;
  }

  get isCompany() {
    return this.clientType.value === "COMPANY";
  }

  get emailControl() {
    return this.clientForm.get("email") as FormControl;
  }

  get emailControlInvalid() {
    return this.emailControl.hasError("email");
  }

  get passwordsDontMatch() {
    const passwordGroup = this.clientForm.get("passwordGroup") as FormGroup;
    return passwordGroup.hasError("childrenNotEqual");
  }
}
