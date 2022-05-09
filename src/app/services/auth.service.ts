import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../data/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>("https://spring-boot-portfolio.herokuapp.com/login", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("isUserLogged", "lautaro");
      })
    );
  }

  public logOut() {
    sessionStorage.removeItem("isUserLogged");
  }

  public usuarioLogueado():boolean {
    return sessionStorage.getItem("isUserLogged") !== null;
  }

}
