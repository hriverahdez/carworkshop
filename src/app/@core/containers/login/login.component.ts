import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "cws-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.toFormGroup();

  constructor(
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  login(form: FormGroup) {
    const { value } = form;

    this.store.dispatch(new fromStore.Login(value));
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      email: [""],
      password: [""]
    });
  }
}
