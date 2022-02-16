import { UsuarioModel } from 'src/app/Models/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {

  id:number
  usuario:UsuarioModel
  constructor(private route:ActivatedRoute, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuario = new UsuarioModel();
    this.usuarioService.buscarUsuarioPorId(this.id).subscribe(dato => {
      this.usuario = dato
    });
  }

}
