import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolModel } from 'src/app/Models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  //url Base
  private baseUrl = "http://localhost:8080/api/rol";
  constructor(private httpClient : HttpClient) { }

  //metodo para obtener todos los uaurios
  obtenerListaDeRoles():Observable<RolModel[]>{
    return this.httpClient.get<RolModel[]>(`${this.baseUrl+'/listar-todos'}`);
  }

}
