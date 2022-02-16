import { Router } from '@angular/router';
import { UsuarioModel } from './../../../Models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:UsuarioModel[];
  constructor(private usuarioService:UsuarioService,
              private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  private obtenerUsuarios(){
    this.usuarioService.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    }, error => console.log(error));
  }

  public actualizarUsuario(id : number){
    this.router.navigate(['actualizar-usuario',id])
  }

  public eliminarUsuario(id : number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.usuarioService.eliminarEmpleado(id).subscribe(dato => {
          this.obtenerUsuarios();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  public verDetalles(id:number){
    this.router.navigate(['usuario-detalles',id])
  }
}
