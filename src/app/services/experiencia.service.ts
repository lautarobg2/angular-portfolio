import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { header } from '../data/header-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  obtenerDatosExperiencia(): Observable<any> {
    return this.http.get<any>("./assets/data/experiencia.json").pipe(map(res => res.experiencia));
  }
}
