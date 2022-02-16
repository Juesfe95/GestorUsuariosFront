import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../../../Models/usuario';
import {RolModel} from '../../../Models/rol';
import { RolService } from 'src/app/services/RolService/rol.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario : UsuarioModel = new UsuarioModel();
  roles : RolModel[];
  constructor(private rolesService:RolService,
              private usuarioService:UsuarioService,
              private router:Router ) { }

  ngOnInit(): void {
    this.obtenerRoles();
  }

  crearUsuario(){
    this.usuarioService.registrarUsuario(this.usuario).subscribe(dato => {
      this.irAListadeUsuarios();
    }, error => console.log(error));
  }

  private obtenerRoles(){
    this.rolesService.obtenerListaDeRoles().subscribe(dato => {
      this.roles = dato;
    }, error => console.log(error));
  }


  irAListadeUsuarios(){
    this.router.navigate(['/usuarios'])
  }

}
