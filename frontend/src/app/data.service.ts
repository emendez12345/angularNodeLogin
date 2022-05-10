import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{Categoria} from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { 
  console.log('service is working')
  }

  getData(){
    return this.httpclient.get('http://127.0.0.1:8000/api/categorias');
  }

  insertData(data : any){
    return this.httpclient.post('http://127.0.0.1:8000/api/categorias', data);
  }

  deleteData(id : any){
    return this.httpclient.delete('http://127.0.0.1:8000/api/categorias/' + id);
  }

  getCategoriaById(id:any){
    return this.httpclient.get('http://127.0.0.1:8000/api/categorias/' + id);
  }

  updateDate(id:any,data:any){
    return this.httpclient.put('http://127.0.0.1:8000/api/categorias/' + id, data);
  }
  
}
