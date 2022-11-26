import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginApiService } from 'src/app/login-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:any=new FormGroup({
   
    email:new FormControl(null,[Validators.pattern("^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$"),Validators.required]),
    password:new FormControl(null,[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"),Validators.minLength(6),Validators.required,]),
   
   
  })
  constructor(private loginapiservice:LoginApiService,private router:Router) { }
  data:any=[]
  ngOnInit(): void {
  }

  login(){
    const data=this.loginform.value
    this.loginapiservice.login(data).subscribe(res=>{
      
      alert('Login successfull')
this.router.navigate(['/books'])
    },err=>{
      alert("Login failed")
    })
  }

}
