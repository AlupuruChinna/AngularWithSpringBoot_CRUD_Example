import { BackendServicesService } from './../service/backend-services.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: BackendServicesService) {
  }
  name = '';

  dataFromSerer: string;

  ngOnInit() {
    // this.name = this.route.snapshot.params['name'];
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    // console.log(" Welcome to getWelcome Function");
    this.service.executeWelcomeBeanService().subscribe(
       response => this.handleResponse(response),
       error => this.handleErrorResponse(error)

    );
  }

  handleResponse(response) {
   this.dataFromSerer = response.message;

   // here message is the property of HelloBean class from an SB application
   // for that we need to declare same attribute as an local veriable in
   // HelloBeanc class in Backened Service ts
  }

  handleErrorResponse(error) {
    this.dataFromSerer = error.error.message;

    console.log(error);

    // here error will display an format of JSON , In that message has one of the property that read
    // user message so that we called as like error.message

   }
}
