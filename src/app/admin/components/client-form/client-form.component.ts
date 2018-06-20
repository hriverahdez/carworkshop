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

        this.onCreate.emit({
          ...client,
          contrasenna: value.passwordGroup.contrasenna
        });
      }
    }
  }

  clearCompanyFields(client: Client) {
    const {
      cargo,
      cargo_visible,
      web,
      web_visible,
      nombre_comercial,
      nombre_comercial_visible,
      ...rest
    } = client;

    return rest;
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      tipo: ["HOMEUSER"],

      cargo: [""],
      cargo_visible: [false],
      nombre_comercial: [""],
      nombre_comercial_visible: [false],
      web: [""],
      web_visible: [false],

      nombre: ["", Validators.required],
      nombre_visible: [true],
      apellidos: ["", Validators.required],
      apellidos_visible: [true],
      fecha_de_alta: [""],
      fecha_de_alta_visible: [false],
      correo: ["", [Validators.required, Validators.email]],
      correo_visible: [false],
      passwordGroup: this.fb.group(
        {
          contrasenna: ["", Validators.required],
          contrasenna_repeat: ["", Validators.required]
        },
        {
          validator: CustomValidator.childrenEqual
        }
      ),
      dni: [""],
      dni_visible: [false],
      sexo: ["M"],
      sexo_visible: [false],
      cumpleannos: [""],
      cumpleannos_visible: [false],
      direccion: [""],
      direccion_visible: [false],
      localidad: [""],
      localidad_visible: [false],
      codigo_postal: [""],
      codigo_postal_visible: [false],
      vinculado: [""],
      vinculado_visible: [false],
      telef_casa: [""],
      telef_casa_visible: [false],
      telef_movil: [""],
      telef_movil_visible: [false],
      telef_otro: [""],
      telef_otro_visible: [false]
    });
  }

  get clientType() {
    return this.clientForm.get("tipo") as FormControl;
  }

  get isCompany() {
    return this.clientType.value === "COMPANY";
  }

  get emailControl() {
    return this.clientForm.get("correo") as FormControl;
  }

  get emailControlInvalid() {
    return this.emailControl.hasError("email");
  }

  get passwordsDontMatch() {
    const passwordGroup = this.clientForm.get("passwordGroup") as FormGroup;
    return passwordGroup.hasError("childrenNotEqual");
  }
}
