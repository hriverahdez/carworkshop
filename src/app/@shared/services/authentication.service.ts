import { Injectable } from "@angular/core";

// import { tokenNotExpired } from "angular2-jwt";
import { RequestOptions } from "@angular/http";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import { AuthUser } from "../../@core/models/auth-user.model";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem("token");
  }

  getCurrentUser(): AuthUser {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  updateCurrentUserInfo(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  isAuthenticated() {
    const token = this.getToken();
    // return tokenNotExpired(null, token);
    return !!token;
  }

  login(user: AuthUser): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${environment.apiURL}/login`, user).pipe(
      map(
        (loginResponse: {
          success: boolean;
          data: { user: AuthUser; token: string };
        }) => {
          // console.log("LOGIN RESPONSE::", loginResponse);
          if (loginResponse.success) {
            this.storeUserInfo(
              loginResponse.data.token,
              loginResponse.data.user
            );
            return loginResponse.data.user;
          }
        }
      )
    );
  }

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
