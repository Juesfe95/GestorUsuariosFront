import { RolModel } from 'src/app/Models/rol';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //url Base
  private baseUrl = "http://localhost:8080/api/usuario";
  constructor(private httpClient : HttpClient) { }

  //metodo para obtener todos los uaurios
  obtenerListaDeUsuarios():Observable<UsuarioModel[]>{
    return this.httpClient.get<UsuarioModel[]>(`${this.baseUrl+'/listar-todos'}`);
  }

  //metodo para crear usuarios
  registrarUsuario(usuario:UsuarioModel): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl+'/crear'}`,usuario);
  }

  //metodo para actualizar un usuario
  actualizarUsuario(usuario:UsuarioModel): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl+'/actualizar'}`,usuario)
  }

  //metodo para buscar un usuario por ID
  buscarUsuarioPorId(id:number): Observable<UsuarioModel>{
    return this.httpClient.get<UsuarioModel>(`${this.baseUrl+'/buscar-por-id?id='+id}`);
  }

  //metodo para eliminar empleado
  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl+'/eliminar?id='+id}`)
  }

}
