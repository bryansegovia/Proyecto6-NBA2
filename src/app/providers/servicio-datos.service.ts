import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  private URL: string = 'https://z8rfkiohbl.execute-api.us-east-1.amazonaws.com/nba-api/players';

  



  constructor(private http:HttpClient) { }

  getResponse(){
    return this.http.get(this.URL);
  }

}
