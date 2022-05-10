import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor(
    private authservice: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  register(){

    this.authservice.register(this.user).subscribe((res:any)=>{
      console.log(res);
    //  localStorage.setItem('token',res.token);
      this.router.navigate(['login']);
    })

    //console.log(this.user);

  }
  
 /* insertData(){
    this.dataService.insertArt(this.articulo).subscribe(res=>{
  //  console.log(res);
 //  console.log(this.articulo);
   this.getArticulosData();
  });

  }*/

}
