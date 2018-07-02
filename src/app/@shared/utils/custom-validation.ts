import {
  AbstractControl,
  ValidatorFn,
  FormGroup,
  ValidationErrors,
  FormControl,
  FormGroupDirective,
  NgForm
} from "@angular/forms";

import { ErrorStateMatcher } from "@angular/material";

export class CustomValidator {
  static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
    const [firstControlName, ...otherControlNames] = Object.keys(
      formGroup.controls || {}
    );
    const isValid = otherControlNames.every(
      controlName =>
        formGroup.get(controlName).value ===
        formGroup.get(firstControlName).value
    );

    return isValid ? null : { childrenNotEqual: true };
  };
}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control && control.invalid);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid
    );

    return invalidCtrl || invalidParent;
  }
}

/**
 * Collection of reusable RegExps
 */
export const regExps: { [key: string]: RegExp } = {
  numbersRequired: /^\d+$/,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
  ip: /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/,
  ipWithCIDR: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([8-9]|[12]d|3[0]))$/
};

/**
 * Collection of reusable error messages
 */
export const errorMessages: { [key: string]: string } = {
  fullName: "Full name must be between 1 and 128 characters",
  email: "El email debe ser una dirección de correo válida (username@domain)",
  confirmEmail: "Las direcciones de email deben coincidir",
  password:
    "El password debe tener entre 7 y 15 caracteres y contener al menos un número y un caracter especial",
  confirmPassword: "Las contraseñas deben coincidir"
};
