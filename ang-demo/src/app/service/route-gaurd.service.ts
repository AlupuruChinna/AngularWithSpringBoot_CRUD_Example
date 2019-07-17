import { UserAuthenticationService } from './user-authentication.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(private forGaurdChecking: UserAuthenticationService,
    private routr: Router) {

  }

  canActivate(routr: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.forGaurdChecking.isUserLoggedIn())
      return true
    
    this.routr.navigate(['welcome'])

    return false;
  }
}


