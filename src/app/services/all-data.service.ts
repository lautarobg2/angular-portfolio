import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import{ acercade } from "src/app/data/acerca-de-interface"
import{ educacion } from "src/app/data/educacion-interface"
import{ experiencia } from "src/app/data/experiencia-interface"
import{ header } from "src/app/data/header-interface"
import{ skills } from "src/app/data/skills-interface"


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  apiUrlHeader: string = "http://localhost:3000/header/0";
  apiUrlAcercaDe: string = "http://localhost:3000/acercade/0";
  apiUrlEducacion: string = "http://localhost:3000/educacion";
  apiUrlExperiencia: string = "http://localhost:3000/experiencia";
  apiUrlSkills: string = "http://localhost:3000/skills";
  apiUrlProyects: string = "http://localhost:3000/proyects";


  constructor( private http: HttpClient) { }

  getDatosHeader():Observable<any>{
    return  this.http.get(this.apiUrlHeader);
  }

  getDatosAcercaDe():Observable<any>{
    return  this.http.get(this.apiUrlAcercaDe);
  }

  getDatosEducacion():Observable<any>{
    return  this.http.get(this.apiUrlEducacion);
  }

  getDatosExperiencia():Observable<any>{
    return  this.http.get(this.apiUrlExperiencia);
  }

  getDatosSkills():Observable<any>{
    return  this.http.get(this.apiUrlSkills);
  }

  getDatosProyects():Observable<any>{
    return  this.http.get(this.apiUrlProyects);
  }

                
                      // EDUCACION

  onDeleteEducacion(educacion:educacion):Observable<educacion>{
    const url = `${this.apiUrlEducacion}/${educacion.id}`
    return this.http.delete<educacion>(url)
  }

  saveEditEducacion(educacion?:educacion):Observable<educacion>{
    const url = `${this.apiUrlEducacion}/${educacion?.id}`
    return this.http.patch<educacion>(url, educacion, httpOptions)
  }

  addEducacion(educacion:educacion):Observable<educacion>{
    return this.http.post<educacion>(this.apiUrlEducacion, educacion, httpOptions)
  }


                       // EXPERIENCIA  
                       
  onDeleteExperiencia(experiencia:experiencia):Observable<experiencia>{
    const url = `${this.apiUrlExperiencia}/${experiencia.id}`
    return this.http.delete<experiencia>(url)
  }

  addExperiencia(experiencia:experiencia):Observable<experiencia>{
    return this.http.post<experiencia>(this.apiUrlExperiencia, experiencia, httpOptions)
  }


  
}
