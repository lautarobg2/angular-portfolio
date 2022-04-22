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
  apiUrlProyects: string = "http://localhost:8080/proyect";


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
    return this.http.put<acercade>(this.apiUrlAcercaDe, acercade, httpOptions)
    }


                
                      // EDUCACION

  onDeleteEducacion(educacion:educacion):Observable<educacion>{
    const url = `${this.apiUrlEducacion + "/delete"}/${educacion.id}`
    return this.http.delete<educacion>(url)
  }

  addEducacion(educacion:educacion):Observable<educacion>{
    return this.http.post<educacion>(this.apiUrlEducacion + "/create", educacion, httpOptions)
  }

  saveEditEducacion(eduSelected?:educacion):Observable<educacion>{
    const url = `${this.apiUrlEducacion}/${eduSelected?.id}`
    return this.http.put<educacion>(url + "/update", eduSelected, httpOptions)
  }




                       // EXPERIENCIA  
                       
  onDeleteExperiencia(experiencia:experiencia):Observable<experiencia>{
    const url = `${this.apiUrlExperiencia + "/delete"}/${experiencia.id}`
    return this.http.delete<experiencia>(url)
  }

  addExperiencia(experiencia:experiencia):Observable<experiencia>{
    return this.http.post<experiencia>(this.apiUrlExperiencia + "/create", experiencia, httpOptions)
  }

  saveEditExperiencia(expSelected?:experiencia):Observable<experiencia>{
    const url = `${this.apiUrlExperiencia}/${expSelected?.id}`
    return this.http.put<experiencia>(url + "/update", expSelected, httpOptions)
  }


                         // SKILLS

  addSkill(skills:skills):Observable<skills>{
    return this.http.post<skills>(this.apiUrlSkills + "/create", skills, httpOptions)
  }                       
                         
  onDeleteSkill(skills:skills):Observable<skills>{
    const url = `${this.apiUrlSkills + "/delete"}/${skills.id}`
    return this.http.delete<skills>(url)
  }


  saveEditSkills(skSelected?:skills):Observable<skills>{
    const url = `${this.apiUrlSkills}/${skSelected?.id}`
    return this.http.put<skills>(url + "/update", skSelected, httpOptions)
  }


                       // PROYECTS

  addProyect(proyect:proyects):Observable<proyects>{
    return this.http.post<proyects>(this.apiUrlProyects + "/create", proyect, httpOptions)
  }                       
                         
  onDeleteProyect(proyect:proyects):Observable<proyects>{
    const url = `${this.apiUrlProyects + "/delete"}/${proyect.id}`
    return this.http.delete<proyects>(url)
  }


  saveEditProyect(proSelected?:proyects):Observable<proyects>{
    const url = `${this.apiUrlProyects}/${proSelected?.id}`
    return this.http.put<proyects>(url + "/update", proSelected, httpOptions)
  }
                     





  
}
