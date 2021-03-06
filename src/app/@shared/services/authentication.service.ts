import { Injectable } from "@angular/core";

import { RequestOptions } from "@angular/http";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { map, tap, finalize } from "rxjs/operators";
import { AuthUser } from "../models/auth-user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private refreshTokenCall;
  private logoutRedirectUrl = "/home";

  constructor(private http: HttpClient, private router: Router) {}

  private getTokenFromLocalStorage(): string {
    return localStorage.getItem("token");
  }

  /**
   * Get the current user's information saved in Local Storage
   */
  getCurrentUser(): AuthUser {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  isAuthenticated() {
    const token = this.getTokenFromLocalStorage();
    return !!token;
  }

  private saveTokenInLocalStorage(token: string) {
    localStorage.setItem("token", token);
  }

  /**
   * Stores the current user's information in Local Storage
   * @param user AuthUser
   */
  storeUserInfo(user: AuthUser) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  /**
   * Returns an Observable of JWT Token. Attempts to retrieve the token from Local Storage
   * and if it fails calls refreshToken()
   */
  getToken(): Observable<string> {
    if (localStorage.getItem("token")) {
      return of(this.getTokenFromLocalStorage());
    }

    return this.refreshToken();
  }

  /**
   * Attempts to refresh a token calling the API. If it succeeds it
   * will save the new token in Local Storage to be used in subsequent requests
   */
  refreshToken(): Observable<string> {
    if (!this.refreshTokenCall) {
      this.refreshTokenCall = this.http
        .get(`${environment.apiURL}/refresh`)
        .pipe(
          map((response: any) => this.getTokenFromRefreshResponse(response)),
          tap(this.saveTokenInLocalStorage),
          finalize(() => (this.refreshTokenCall = null))
        );
    }
    return this.refreshTokenCall;
  }

  private getTokenFromRefreshResponse(response): string {
    return response.token;
  }

  login(user: AuthUser): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${environment.apiURL}/login`, user).pipe(
      map(
        (loginResponse: {
          success: boolean;
          data: { user: AuthUser; token: string };
        }) => {
          if (loginResponse.success) {
            this.storeUserInfo(loginResponse.data.user);
            this.saveTokenInLocalStorage(loginResponse.data.token);
            return loginResponse.data.user;
          }
        }
      )
    );
  }

  updateUserInfo(user: AuthUser): Observable<AuthUser> {
    return this.http
      .put<AuthUser>(`${environment.apiURL}/user/${user.id}`, user)
      .pipe(
        tap(updatedUser => {
          this.storeUserInfo(updatedUser);
        })
      );
  }

  requestPasswordRecoveryEmail(data) {
    return this.http.post<{ message: string }>(
      `${environment.apiURL}/password/reset`,
      data
    );
  }

  resetLostPassword(data: { token: string; email: string; password: string }) {
    return this.http.post<{ success: boolean; message: string }>(
      `${environment.apiURL}/password/reset/${data.token}`,
      data
    );
  }

  /**
   * Log out user
   * @param redirect Redirect after logout. Default false
   */
  logOut(redirect = false) {
    this.http.get(`${environment.apiURL}/logout`);
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    if (redirect) this.router.navigateByUrl(this.logoutRedirectUrl);
  }
}
