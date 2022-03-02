import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../data/educacion-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiUrl = "./assets/data/educacion.json";

  constructor(private http: HttpClient) { }
  obtenerDatosEducacion(): Observable<any> {
    return this.http.get<any>("./assets/data/educacion.json").pipe(map(res => res.educacion));
  }

  onDelete(educacion: educacion): Observable<educacion>{
    const url = `${this.apiUrl}/${educacion.id}`
    return this.http.delete<any>(url)

  }


}
