import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Client } from "../../models/client.model";

import { CustomValidator } from "../../../@shared/utils/custom-validation";

@Component({
  selector: "cws-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.css"]
})
export class ClientFormComponent implements OnInit, OnChanges {
  submitted = false;
  @Input() client: Client;
  @Output() onCreate = new EventEmitter<Client>();

  clientForm: FormGroup = this.toFormGroup();
  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.client) {
      this.isEdit = true;
      this.clientForm.patchValue(this.client);
    }
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      if (!this.isEdit) {
        const client = !this.isCompany ? this.clearCompanyFields(value) : value;
        this.submitted = true;
        this.onCreate.emit({
          ...client,
          contrasenna: value.passwordGroup.contrasenna
        });
      }
    }
  }

  clearCompanyFields(client: Client) {
    const {
      position,
      positionIsVisible,
      web,
      webIsVisible,
      companyName,
      companyNameIsVisible,
      ...rest
    } = client;

    return rest;
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

      firstName: ["", Validators.required],
      firstNameIsVisible: [true],
      lastName: ["", Validators.required],
      lastNameIsVisible: [true],
      registrationDate: [""],
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
