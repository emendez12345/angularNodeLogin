import { Component, OnInit } from '@angular/core';
import{ArticuloService} from 'src/app/articulo.service';
import{Articulo} from 'src/app/Articulo';
import{DataService} from 'src/app/data.service';
import{Categoria} from 'src/app/Categoria';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {


  categorias:any;
  articulos:any;
  articulo = new Articulo();
  /*
  title='Aqui se establecera el sistemas de venta';
  subtitle='Aqui se establece el subtitulo';*/
   
  constructor(private dataService:ArticuloService, private categoriaService:DataService) { }

  ngOnInit(): void {

    this.getArticulosData();
    this.getCategoriasData();
  
  }

  getCategoriasData(){
    this.categoriaService.getData().subscribe(res=>{
      this.categorias=res;
   //  console.log(res);
    });
    //console.log('HOla mundo');
  }

  getArticulosData(){
    this.dataService.getArt().subscribe(res=>{
      this.articulos=res;
    
   //  console.log(res);
    });
    //console.log('HOla mundo');
  }

  insertData(){
    this.dataService.insertArt(this.articulo).subscribe(res=>{
  //  console.log(res);
 //  console.log(this.articulo);
   this.getArticulosData();
  });

  }
  
  deleteData(id: any){
    this.dataService.deleteArt(id).subscribe(res=>{
      this.getArticulosData();
    })
}

}
