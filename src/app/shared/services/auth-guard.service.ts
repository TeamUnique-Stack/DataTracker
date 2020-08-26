// import { Injectable } from '@angular/core';
// import { Router, CanActivate, NavigationEnd } from '@angular/router';
// import { AuthService } from '../../auth/auth.service';

// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) { }
//   canActivate(): boolean {
//     if (!this.auth.getToken) {
//       this.router.navigate(['login']);
//       return false;
//     }
    
//     this.router.events.subscribe(
//       (event: any) => {
//         if (event instanceof NavigationEnd) {
//           if (this.auth.getCurrentUser) {
//             this.router.navigate(['/appselection']);
//             return true;
//           }
//         }
//       });
//     return true;
//   }

// }