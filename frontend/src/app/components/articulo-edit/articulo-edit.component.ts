import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Articulo } from 'src/app/Articulo';
import { ArticuloserService } from 'src/app/articuloser.service';
import { DataService } from 'src/app/data.service';
import{ArticuloService} from 'src/app/articulo.service';
import { Categoria } from 'src/app/Categoria';

@Component({
  selector: 'app-articulo-edit',
  templateUrl: './articulo-edit.component.html',
  styleUrls: ['./articulo-edit.component.css']
})
export class ArticuloEditComponent implements OnInit {


  id: any;
  articuloser:any;
  articulos:any;
  categorias:any;
  articulo = new Articulo();
  categoria = new Categoria();
  
  constructor(private route:ActivatedRoute,private articuloserService:ArticuloserService,private dataService:ArticuloService,private categoriaService:DataService ) { }

  ngOnInit(): void {

  console.log(this.route.snapshot.params.id);
  this.id=this.route.snapshot.params.id;
  this.getData();
  this.getArticulosData();
  this.getCategoriasData();
  }

  getData(){
    this.articuloserService.getArticuloById(this.id).subscribe(res=>{
      console.log(res);
     this.articuloser=res;
     this.articulo=this.articuloser;
    })
}

getArticulosData(){
  this.dataService.getArt().subscribe(res=>{
    this.articulos=res;

  
 //  console.log(res);
  });
  //console.log('HOla mundo');
}

getCategoriasData(){
  this.categoriaService.getData().subscribe(res=>{
    this.categorias=res;
 //  console.log(res);
  });
  //console.log('HOla mundo');
}

  updateArticulo(){
    this.articuloserService.updateDate(this.id,this.articulo).subscribe(res=>{
              
    });
  }
}
