import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // we can access this service from any place
})
export class UserAuthenticationService {

  constructor() { }

  // here we defined some API's for accessing through the object
  authenticatMethode(username) {
    if (username === 'smart') {
      sessionStorage.setItem('authUser', username);
      return true;
    }

    return false;

  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }
}
