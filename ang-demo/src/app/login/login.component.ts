import { UserAuthenticationService } from './../service/user-authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'chinna'
  password = '123'
  errMsg='Invalid Credentials'
  name= ''
  invalidLogin=false
  constructor(private router : Router, private authenticate:UserAuthenticationService) { }
  //Here authenticate is an type of UserAuthenticationService like object

  ngOnInit() {
  }

  checkValid()
  {
    if(this.authenticate.authenticatMethode(this.username))
    //here we can call authenticaterMethode with the object of UserAuthenticationService
    {
      this.router.navigate(['welcome',this.username])
      
      this.invalidLogin=false
      
      
    }
    else
    {
      this.invalidLogin=true
      
    }
  }
}
