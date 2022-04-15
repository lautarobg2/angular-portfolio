import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import{ acercade } from "src/app/data/acerca-de-interface"
import{ educacion } from "src/app/data/educacion-interface"
import{ experiencia } from "src/app/data/experiencia-interface"
import{ header } from "src/app/data/header-interface"
import{ skills } from "src/app/data/skills-interface"
import { proyects } from "src/app/data/proyects-interface"


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  apiUrlHeader: string = "http://localhost:8080/header";
  apiUrlAcercaDe: string = "http://localhost:8080/about";
  apiUrlEducacion: string = "http://localhost:8080/education";
  apiUrlExperiencia: string = "http://localhost:8080/experience";
  apiUrlSkills: string = "http://localhost:8080/skills";
  apiUrlProyects: string = "http://localhost:8080/proyects";


  constructor( private http: HttpClient) { }

  getDatosHeader():Observable<header[]>{
    return  this.http.get<any>(this.apiUrlHeader);
  }

  getDatosAcercaDe():Observable<acercade[]>{
    return  this.http.get<any>(this.apiUrlAcercaDe);
  }

  getDatosEducacion():Observable<educacion[]>{
    return  this.http.get<any>(this.apiUrlEducacion);
  }

  getDatosExperiencia():Observable<experiencia[]>{
    return  this.http.get<any>(this.apiUrlExperiencia);
  }

  getDatosSkills():Observable<skills[]>{
    return  this.http.get<any>(this.apiUrlSkills);
  }

  getDatosProyects():Observable<proyects[]>{
    return  this.http.get<any>(this.apiUrlProyects);
  }



                      // ACERCA DE 
  
    saveEditAcercaDe(acercade:acercade):Observable<acercade>{
    return this.http.patch<acercade>(this.apiUrlAcercaDe, acercade, httpOptions)
    }


                
                      // EDUCACION

  onDeleteEducacion(educacion:educacion):Observable<educacion>{
    const url = `${this.apiUrlEducacion}/${educacion.id}`
    return this.http.delete<educacion>(url)
  }

  addEducacion(educacion:educacion):Observable<educacion>{
    return this.http.post<educacion>(this.apiUrlEducacion, educacion, httpOptions)
  }

  saveEditEducacion(eduSelected?:educacion):Observable<educacion>{
    return this.http.patch<educacion>(this.apiUrlEducacion, eduSelected, httpOptions)
  }




                       // EXPERIENCIA  
                       
  onDeleteExperiencia(experiencia:experiencia):Observable<experiencia>{
    const url = `${this.apiUrlExperiencia}/${experiencia.id}`
    return this.http.delete<experiencia>(url)
  }

  addExperiencia(experiencia:experiencia):Observable<experiencia>{
    return this.http.post<experiencia>(this.apiUrlExperiencia, experiencia, httpOptions)
  }

  saveEditExperiencia(expSelected?:experiencia):Observable<experiencia>{
    return this.http.patch<experiencia>(this.apiUrlExperiencia, expSelected, httpOptions)
  }


                         // SKILLS

  addSkill(skills:skills):Observable<skills>{
    return this.http.post<skills>(this.apiUrlSkills, skills, httpOptions)
  }                       
                         
  onDeleteSkill(skills:skills):Observable<skills>{
    const url = `${this.apiUrlSkills}/${skills.id}`
    return this.http.delete<skills>(url)
  }





  
}
