import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  submitform:any=new FormGroup({
    bookname:new FormControl(null,),
    authorname:new FormControl(null,),
    published:new FormControl(null,),
    description:new FormControl(null,)
   
  })
  constructor(private api:ApiService,private router:Router ) { }
  // data:any=[]
  ngOnInit(): void {
  }
onsubmit(){
  const data=this.submitform.value
  this.api.addBook(data).subscribe(res=>{
    alert("success")
this.router.navigate(['/books'])
  },err=>{
    alert("failed")
  })
}
}
