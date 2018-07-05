import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { catchError } from "rxjs/operators";

@Component({
  selector: "cws-password-recovery",
  templateUrl: "./password-recovery.component.html",
  styleUrls: ["./password-recovery.component.css"]
})
export class PasswordRecoveryComponent implements OnInit {
  recoveryForm: FormGroup = this.toFormGroup();
  authLoading$: Observable<boolean>;

  passwordRecoveryMessage$: Observable<string>;
  passwordRecoveryError$: Observable<string>;

  error = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.authLoading$ = this.store.select(fromStore.selectAuthLoading);
    this.passwordRecoveryMessage$ = this.store.select(
      fromStore.selectPasswordRecoveryMessage
    );
    this.passwordRecoveryError$ = this.store.select(
      fromStore.selectPasswordRecoveryError
    );
  }

  requestRecoveryEmail(form: FormGroup) {
    this.store.dispatch(new fromStore.RequestPasswordRecoveryEmail(form.value));
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      email: [""]
    });
  }
}
