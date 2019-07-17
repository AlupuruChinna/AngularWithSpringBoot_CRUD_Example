import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloBeanc {


  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class BackendServicesService {


  constructor(private http: HttpClient) { }

  executeWelcomeBeanService() {
    // console.log("Exicuted from services");
    return this.http.get<HelloBeanc>('http://localhost:8081/hello-bean') ;



  }


}
