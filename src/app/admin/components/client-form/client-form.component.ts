import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { Client, ClientType } from "../../../@core/models/client.model";

@Component({
  selector: "cws-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.css"]
})
export class ClientFormComponent implements OnInit, OnChanges {
  @Input() client: Client;
  @Output() onCreate = new EventEmitter<Client>();
  @Output() onUpdate = new EventEmitter<Client>();
  @Output() canceled = new EventEmitter();

  parentForm: FormGroup = this.fb.group({});

  isEdit: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes): void {
    if (this.client) {
      this.isEdit = true;
    }
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      if (!this.isEdit) {
        const newClient = !this.isCompany
          ? this.clearCompanyFields(value.client)
          : value.client;

        this.onCreate.emit({
          ...newClient,
          password: value.client.passwordGroup.password,
          car: value.car
        });
      } else {
        const updatedClient = !this.isCompany
          ? this.clearCompanyFields(value.client)
          : value.client;

        this.onUpdate.emit({
          id: this.client.id,
          ...updatedClient,
          car: value.car
        });
      }
    }
  }

  cancel() {
    this.canceled.emit();
  }

  clearCompanyFields(client: Client) {
    const {
      position,
      positionIsVisible,
      web,
      webIsVisible,
      companyName,
      companyNameIsVisible,
      socialMission,
      socialMissionIsVisible,
      ...rest
    } = client;

    return rest;
  }

  get clientType() {
    return this.parentForm.get("client").get("type") as FormControl;
  }

  get isCompany() {
    return this.clientType.value === ClientType.Company;
  }
}
