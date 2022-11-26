import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
 import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-updatabook',
  templateUrl: './updatabook.component.html',
  styleUrls: ['./updatabook.component.css']
})
export class UpdatabookComponent implements OnInit {
  submitform:any=new FormGroup({
    bookname:new FormControl(null,),
    authorname:new FormControl(null,),
    published:new FormControl(null,),
    description:new FormControl(null,)
   
  })
  constructor(private api:ApiService,private url:ActivatedRoute,private router:Router ) { }
  id:any
  // data:any=[]
  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
    this.api.singleBook(this.id).subscribe(data=>{
      this.submitform.patchValue(data)
    })
  }


onsubmit(){
  this.id=this.url.snapshot.params['id'];
  const newdata=this.submitform.value
  console.log(newdata)
  this.api.updateBook(this.id,newdata).subscribe((data:any)=>{
    console.log(data)
    alert("success")
    this.router.navigate(['/books'])
  },err=>{
    alert("failed")
  })
}
}
