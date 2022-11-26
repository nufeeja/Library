import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginApiService } from 'src/app/login-api.service';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  submitform:any=new FormGroup({
        username:new FormControl(null,[Validators.required]),
        email:new FormControl(null,[Validators.pattern("^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$"),Validators.required]),
        password:new FormControl(null,[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"),Validators.minLength(6),Validators.required,]),
        genter:new FormControl(null,[Validators.required])
       
      })
  constructor(private loginapiservice:LoginApiService,private router:Router) { }
  data:any=[]
  ngOnInit(): void {
  }
  submit(){
    const data=this.submitform.value
    this.loginapiservice.signup(data).subscribe(response=>{
      alert('success')
    this.router.navigate(['/login'])
      console.log(response)
    },err=>{
      alert(err)
    })
  }
}
