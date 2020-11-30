
import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  invalidUser=false;
 
  get userId(){
    return this.loginForm.get('userId');
  }
  public errorMessages={
    userId:[
      {type: "required",
        message: "Please Enter valid User ID",
      }
    ]
  }
  
  loginForm =this.formBuilder.group({
    userId:['',[Validators.required]],
  })
  constructor(
    private formBuilder:FormBuilder,
    private router:Router
    ) { 
      
  }
  
  ngOnInit() {
  }
  public submit(){
    console.log();
    if(this.validateUserId(this.loginForm.value.userId)){
      this.router.navigate(['home']);
      this.invalidUser=false;
    }
    else{
      this.invalidUser=true;
    }
   
  }
  
  validateUserId(loginUserId){
    if(loginUserId=="A001"){
      return true;
    }
    else{
      return false;
    }
  }
  
}
