package com.smartApp.spbootforangular.controller;

import com.smartApp.spbootforangular.beans.HelloBean;
//import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

    @GetMapping("/hello")
    public String sayHello(){
        return "hello";
    }

    @GetMapping("/hello-bean")
    public HelloBean sayHelloBean() throws RuntimeException{

         return new HelloBean("This msg from bean");
        //throw  new RuntimeException("Some error has occurred please contact *** - *** for admin support");
    }

    @GetMapping("/hello-bean/path/{name}")
    public String sayHelloBeanWithParam(@PathVariable("name") String name){

        String msg= String.format("Hello %s ! welcome ", name);
        return msg;

    }
}

