import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  /**
   * login
   */
  public login(value) {
   return this.http.post('http://localhost:1234/user/login',value).pipe(
     tap(data=>{
       console.log(data)
       if(data['completed']=== true){
        this.token=data['token'];
        this.userName=data['name'];
       }
     })
   )
  }

  
  public get token()  {
    return localStorage.getItem('token');
  }

  public set token(value){
    localStorage.setItem('token',value);
  }
  public log_out(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
  
  public get userName() : string {
    return localStorage.getItem('username')
  }
  
  public set userName(value) {
        localStorage.setItem('username',value);
  }
  
  
}
