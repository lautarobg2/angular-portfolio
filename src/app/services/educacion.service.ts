import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../data/educacion-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }
  obtenerDatosEducacion(): Observable<any> {
    return this.http.get<any>("./assets/data/educacion.json").pipe(map(res => res.educacion));
  }
}
