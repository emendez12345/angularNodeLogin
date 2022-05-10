import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticuloserService {

  constructor(private httpclient:HttpClient) { }
  
  getArt(){
    return this.httpclient.get('https://unico.jacs3dpruebas.shop/api/articulos');
  }

  getArticuloById(id:any){
    return this.httpclient.get('https://unico.jacs3dpruebas.shop/api/articulos/' + id);
  }

  insertArt(data : any){
    return this.httpclient.post('http://127.0.0.1:8000/api/articulos', data);
  }

  deleteArt(id : any){
    return this.httpclient.delete('http://127.0.0.1:8000/api/articulos/' + id);
  }

 
  updateDate(id:any, data:any){
    return this.httpclient.put('http://127.0.0.1:8000/api/articulos/' + id, data);
  }
}
