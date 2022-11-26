import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post("http://localhost:5000/api/login",data)
      }

      signup(data:any){
        return this.http.post("http://localhost:5000/api/signup",data)
      }
}
