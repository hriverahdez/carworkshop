import { Injectable } from "@angular/core";

// import { tokenNotExpired } from "angular2-jwt";
import { RequestOptions } from "@angular/http";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

// import { User } from "../../@core/models/user.model";

import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem("token");
  }

  // getCurrentUser(): User {
  //   return JSON.parse(localStorage.getItem("currentUser"));
  // }

  updateCurrentUserInfo(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  isAuthenticated() {
    const token = this.getToken();
    // return tokenNotExpired(null, token);
    return null;
  }

  // login(user: User): Observable<User> {
  //   let authEncoded = btoa(user.email + ":" + user.password);
  //   let headers: HttpHeaders = new HttpHeaders({
  //     Authorization: "Basic " + authEncoded
  //   });
  //   return this.http
  //     .post<User>(
  //       `${environment.apiURL}/auth`,
  //       { access_token: environment.masterKey },
  //       { headers: headers, reportProgress: true }
  //     )
  //     .pipe(
  //       map((loginResponse: any) => {
  //         this.storeUserInfo(loginResponse.token, loginResponse.user);
  //         return loginResponse.user;
  //       })
  //     );
  // }

  // register(user: User): Observable<User> {
  //   let authEncoded = btoa(user.email + ":" + user.password);
  //   let headers: HttpHeaders = new HttpHeaders({
  //     Authorization: "Basic " + authEncoded
  //   });
  //   return this.http
  //     .post<User>(
  //       `${environment.apiURL}/users`,
  //       { access_token: environment.masterKey, ...user },
  //       { headers: headers, reportProgress: true }
  //     )
  //     .pipe(
  //       map((registerResponse: any) => {
  //         this.storeUserInfo(registerResponse.token, registerResponse.user);
  //         return registerResponse.user;
  //       })
  //     );
  // }

  storeUserInfo(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  }
}
