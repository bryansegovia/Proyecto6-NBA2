import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  private URL: string = 'https://proyecto6-nbastats-13bc6-default-rtdb.firebaseio.com/collection.json';

  



  constructor(private http:HttpClient) { }

  getResponse(){
    return this.http.get(this.URL);
  }

}
