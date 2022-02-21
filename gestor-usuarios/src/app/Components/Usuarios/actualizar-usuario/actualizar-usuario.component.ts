import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../../../Models/usuario';
import {RolModel} from '../../../Models/rol';
import { RolService } from 'src/app/services/RolService/rol.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id:number
  usuario : UsuarioModel = new UsuarioModel();
  roles: RolModel[];
  constructor(private rolesService:RolService,
              private usuarioService:UsuarioService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerRoles();
    this.id = this.route.snapshot.params['id'];
    this.usuario = new UsuarioModel();
    this.usuarioService.buscarUsuarioPorId(this.id).subscribe(dato => {
      this.usuario = dato
    });
  }

  private obtenerRoles(){
    this.rolesService.obtenerListaDeRoles().subscribe(dato => {
      this.roles = dato;
    }, error => console.log(error));
  }

  crearUsuario(){
    this.usuarioService.registrarUsuario(this.usuario).subscribe(dato => {
      this.irAListadeUsuarios();
    }, error => console.log(error));
  }

  irAListadeUsuarios(){
    this.router.navigate(['/usuarios'])
  }
}
