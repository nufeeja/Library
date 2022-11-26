import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
data:any=[]
book:any
  constructor(private api:ApiService,private router:Router,private url:ActivatedRoute) { }

  ngOnInit(): void {
 this.dataGet();
  }

dataGet(){
  this.api.viewAll().subscribe(res=>{
    this.data=res
    console.log(this.data)
   
  })
}



refreh():void{
  window.location.reload()
}
updatebtn(id:any){
  this.router.navigate(['/updatebook'])

// this.router.navigate(['/update'])
}

deletebtn(id:any){
this.api.deleteBook(id).subscribe(res=>{
 this.book=res;
 alert('Succesfully Deleted')
 this.refreh()
})


}
}
