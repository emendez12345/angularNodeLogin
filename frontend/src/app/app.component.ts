import { splitClasses } from '@angular/compiler';
import { Component } from '@angular/core';


import{DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*

  name:string="Laura"

  users:string[]=['edw','lina','valentina'];
  //tittle:string="Articulos"
  posts=[];

  constructor(private dataservice: DataService){
    this.dataservice.getData().subscribe(data =>{
      console.log(data);
      //this.posts=data;
    
    });
  }

  agregarUser(newUsuario: any){

    this.users.push(newUsuario.value);
    newUsuario.value="";
    newUsuario.focus();
    return false;
  }

  deleteUser(user:any){
    for (let i= 0; i < this.users.length; i++) {
   
      if (user==this.users[i]) {
        this.users.splice(i,1);
      }
       
    }

  }

  sayHello(){
    alert('Hello');
  }

*/

}
