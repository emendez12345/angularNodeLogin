import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL='http://localhost:4000';

  constructor(
    private http:HttpClient,
    private jwtHelper: JwtHelperService ) { }

    register(user:any){
      return this.http.post(`${this.URL}/user/register`,user);
   }  
 /*  insertArt(data : any){
    return this.httpclient.post('http://127.0.0.1:8000/api/articulos', data);
  } */

  singin(user:any){
        return this.http.post(`${this.URL}/user/singin`,user);
  }

  isAuth():boolean{
   const token:any= localStorage.getItem('token');
   if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
     return false;
   }
    return true;
  }



}
