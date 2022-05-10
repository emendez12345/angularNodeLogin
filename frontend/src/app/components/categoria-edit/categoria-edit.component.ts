import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Categoria } from 'src/app/Categoria';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {


  id: any;
  data:any;
  categoria = new Categoria();
  
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit(): void {
  console.log(this.route.snapshot.params.id);
  this.id=this.route.snapshot.params.id;
  this.getData();
  }

  getData(){
    this.dataService.getCategoriaById(this.id).subscribe(res=>{
 //    console.log(res);
     this.data=res;
     this.categoria=this.data;
    })
}

   updateCategoria(){
    this.dataService.updateDate(this.id,this.categoria).subscribe(res=>{
      this.getData();
     
    });
}
}
