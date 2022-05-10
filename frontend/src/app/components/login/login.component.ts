import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // user = new User();

 /*user ={
   username:'eamv0066',
   pass:'12345'
 }*/

 user = new User();


  constructor(
    private authservice: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  login(){

    this.authservice.singin(this.user).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['private']);
    })

    //console.log(this.user);

  }

}
