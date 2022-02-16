import { RolModel } from "./rol";

export class UsuarioModel {

  id:number;
  nombre:string;
  cargoId:RolModel;
  activo:boolean;

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.cargoId = new RolModel();
    this.activo = false;
  }

}
