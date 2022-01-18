import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { acercade } from '../data/acerca-de-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  constructor(private http: HttpClient) { }

  obtenerDatosAcercaDe(): Observable<any> {
    return this.http.get<any>("./assets/data/acerca-de.json").pipe(map(res => res.acercade));

  }
}
