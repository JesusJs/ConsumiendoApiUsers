import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users.models';
import { map } from 'rxjs/operators';
import { Gravatares } from '../models/gravatares.models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  private users = 'https://jsonplaceholder.typicode.com/users';
  private gravateres= 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }
    getUsuarios() {
      const url = this.users;
     return this.http.get<Users>(url);
    }
    getAvatares(){
      const urlGra = this.gravateres;
      return this.http.get<Gravatares>(urlGra).pipe(
        map(resp=>{
          return resp.results;
        })
      )
    }


}


