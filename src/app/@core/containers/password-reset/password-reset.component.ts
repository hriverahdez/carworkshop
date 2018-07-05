import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { CustomValidator } from "../../../@shared/utils/custom-validation";

@Component({
  selector: "cws-password-reset",
  templateUrl: "./password-reset.component.html",
  styleUrls: ["./password-reset.component.css"]
})
export class PasswordResetComponent implements OnInit {
  userEmail: string;
  token: string;
  resetForm: FormGroup = this.toFormGroup();
  authLoading$: Observable<boolean>;

  passwordRecoveryMessage$: Observable<string>;
  passwordRecoveryError$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.params["token"];
    this.userEmail = this.route.snapshot.queryParams["email"];
    if (!this.userEmail || this.userEmail === "") {
      this.store.dispatch(new fromStore.Go({ path: ["/home"] }));
    }

    this.authLoading$ = this.store.select(fromStore.selectAuthLoading);
    this.passwordRecoveryMessage$ = this.store.select(
      fromStore.selectPasswordRecoveryMessage
    );
    this.passwordRecoveryError$ = this.store.select(
      fromStore.selectPasswordRecoveryError
    );
  }

  resetPassword(form: FormGroup) {
    const { value } = form;
    this.store.dispatch(
      new fromStore.ResetLostPassword({
        token: this.token,
        email: this.userEmail,
        password: value.password
      })
    );
  }

  get passwordsDontMatch() {
    return this.resetForm.hasError("childrenNotEqual");
  }

  toFormGroup(): FormGroup {
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
}
