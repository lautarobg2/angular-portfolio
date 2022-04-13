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
    return this.http.post<Boolean>("http://localhost:8080/login", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "lautarobg2");
      })
    );
  }

  public logOut() {
    sessionStorage.removeItem("user");
  }

  public usuarioLogueado():boolean {
    return sessionStorage.getItem("user") !== null;
  }

}
