import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogvictoriaaalves.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogvictoriaaalves.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogvictoriaaalves.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    } 
    return ok;
  }
}
