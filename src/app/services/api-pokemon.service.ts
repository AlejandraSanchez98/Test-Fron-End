import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  private headers: HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }//fin constructor


  /**
  * @description: get web service pokémon name
  * @author: Alejandra Sanchez - 2022/08/13
  */
  public getPokemonNameWs():Observable<Object> {
    return this.http.get(`${environment.host}/api/v2/pokemon?offset=100&limit=100`, { headers: this.headers });
  }


  /**
  * @description: get web service pokémon image
  * @author: Alejandra Sanchez - 2022/08/13
  */
  public getPokemonImageWs(name:string) {
    return this.http.get(`${environment.host}/api/v2/pokemon-form/${name}`, {headers: this.headers});
  }


  /**
  * @description: get web service pokémon ability
  * @author: Alejandra Sanchez - 2022/08/13
  */
   public getPokemonAbilityWs(name:string) {
    return this.http.get(`${environment.host}/api/v2/pokemon/${name}`, {headers: this.headers});
  }

}
