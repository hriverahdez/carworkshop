import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../../models/car.model";

@Component({
  selector: "cws-car-form",
  templateUrl: "./car-form.component.html",
  styleUrls: ["./car-form.component.css"]
})
export class CarFormComponent implements OnInit, OnChanges {
  @Input("parent") parentForm: FormGroup;
  @Input() car: Car;
  carForm: FormGroup = this.toFormGroup();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.parentForm.addControl("carro", this.carForm);
  }

  ngOnChanges(changes): void {
    if (this.car) {
      this.carForm.patchValue(this.car);
    }
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      matricula: ["", Validators.required],
      matricula_visible: [true],
      marca: ["", Validators.required],
      marca_visible: [true],
      modelo: ["", Validators.required],
      modelo_visible: [true],
      variante: [""],
      variante_visible: [false],
      tipo: [""],
      tipo_visible: [false],
      version: [""],
      version_visible: [false],
      primera_matriculacion: [""],
      primera_matriculacion_visible: [false],
      numero_bastidor: [""],
      numero_bastidor_visible: [false],
      combustible: [""],
      combustible_visible: [false],
      marca_motor: [""],
      marca_motor_visible: [false],
      codigo_motor: [""],
      codigo_motor_visible: [false],
      numero_cilindros: [""],
      numero_cilindros_visible: [false],
      cilindrada: [""],
      cilindrada_visible: [false],
      potencia_kw: [""],
      potencia_kw_visible: [false],
      potencia_cv: [""],
      potencia_cv_visible: [false],
      neumaticos: [""],
      neumaticos_visible: [false],
      categoria: [""],
      categoria_visible: [false],
      nivel_emisiones: [""],
      nivel_emisiones_visible: [false],
      codigo_radio: [""],
      codigo_radio_visible: [false],
      codigo_llaves: [""],
      codigo_llaves_visible: [false],
      reset_mantenimiento: [""],
      reset_mantenimiento_visible: [false],
      observaciones: [""],
      observaciones_visible: [false]
    });
  }
}
