import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
api:string="http://localhost:5000"
  constructor(private http:HttpClient) { }
viewAll(){
  return this.http.get("http://localhost:5000/api/booklist")
}
  addBook(data:any){
return this.http.post("http://localhost:5000/api/libraryEntry",data)
  }
  
  updateBook(id:any,data:any){
    return this.http.put("http://localhost:5000/api/bookupdate/"+id,data)
  }
  
  deleteBook(id:number){
    return this.http.delete("http://localhost:5000/api/deletebook/"+id)
  }
  singleBook(id:any){
    return this.http.get("http://localhost:5000/api/singlebook/"+id)
      }
}
