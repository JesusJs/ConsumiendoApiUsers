import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  usuarios:any;
  gravatares:any;

  constructor( private _usuarioService: UsuariosService) {}

  ngOnInit(){
    this._usuarioService.getUsuarios()
    .subscribe(resp => {
      this.usuarios = resp; console.log(this.usuarios)
    });

    this._usuarioService.getAvatares()
    .subscribe(resp => {
      this.gravatares = resp; console.log(this.gravatares)
    });
  }

}
