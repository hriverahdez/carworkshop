// import { Injectable } from "@angular/core";

// import { CanActivate } from "@angular/router";

// import { Store } from "@ngrx/store";
// import { Observable } from "rxjs/Observable";
// import { of } from "rxjs/observable/of";

// import * as fromRoot from "../../@core/store";
// import * as fromServices from "../services";

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private store: Store<fromRoot.AppState>,
//     private authService: fromServices.AuthenticationService
//   ) {}

//   canActivate(): boolean {
//     if (this.authService.isAuthenticated()) {
//       return true;
//     } else {
//       this.store.dispatch(
//         new fromRoot.Go({
//           path: ["/login"]
//         })
//       );
//       return false;
//     }
//   }
// }
