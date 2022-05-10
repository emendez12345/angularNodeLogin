import { Component, OnInit } from '@angular/core';
import{DataService} from 'src/app/data.service';
import{Categoria} from 'src/app/Categoria';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:any;
  categoria = new Categoria();
  /*
  title='Aqui se establecera el sistemas de venta';
  subtitle='Aqui se establece el subtitulo';*/
   
  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.getCategoriasData();

  }

  getCategoriasData(){
    this.dataService.getData().subscribe(res=>{
      this.categorias=res;
   //  console.log(res);
    });
    //console.log('HOla mundo');
  }

  insertData(){
    this.dataService.insertData(this.categoria).subscribe(res=>{
  //  console.log(res);
 //  console.log(this.articulo);
   this.getCategoriasData();
  });

  }
  
  deleteData(id: any){
    this.dataService.deleteData(id).subscribe(res=>{
      this.getCategoriasData();
    })
}
}
