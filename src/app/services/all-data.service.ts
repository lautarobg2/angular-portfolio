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

  apiUrlHeader: string = "https://spring-boot-portfolio.herokuapp.com/header";
  apiUrlAcercaDe: string = "https://spring-boot-portfolio.herokuapp.com/about";
  apiUrlEducacion: string = "https://spring-boot-portfolio.herokuapp.com/education";
  apiUrlExperiencia: string = "https://spring-boot-portfolio.herokuapp.com/experience";
  apiUrlSkills: string = "https://spring-boot-portfolio.herokuapp.com/skills";
  apiUrlProyects: string = "https://spring-boot-portfolio.herokuapp.com/proyect";


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
  
    saveEditAcercaDe(aboutSelected?:acercade):Observable<acercade>{
    return this.http.put<any>(this.apiUrlAcercaDe + "/update", aboutSelected, httpOptions)
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
    return this.http.put<educacion>(this.apiUrlEducacion + "/update", eduSelected, httpOptions)
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
    return this.http.put<experiencia>(this.apiUrlExperiencia + "/update", expSelected, httpOptions)
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
    return this.http.put<skills>(this.apiUrlSkills + "/update", skSelected, httpOptions)
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
    return this.http.put<proyects>(this.apiUrlProyects + "/update", proSelected, httpOptions)
  }
                     





  
}
