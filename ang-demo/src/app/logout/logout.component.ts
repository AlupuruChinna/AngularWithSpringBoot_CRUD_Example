import { UserAuthenticationService } from './../service/user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private isLogout: UserAuthenticationService) { }

  ngOnInit() {
    this.isLogout.logout()
  }

}
