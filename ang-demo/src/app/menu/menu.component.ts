import { UserAuthenticationService } from './../service/user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn :boolean=false

  constructor(private check:UserAuthenticationService) { }

  
  ngOnInit() {
    this.isUserLoggedIn=this.check.isUserLoggedIn()
  }

}
