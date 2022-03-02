import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import{ acercade } from "src/app/data/acerca-de-interface"
import{ educacion } from "src/app/data/educacion-interface"
import{ experiencia } from "src/app/data/experiencia-interface"
import{ header } from "src/app/data/header-interface"
import{ skills } from "src/app/data/skills-interface"


@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  apiUrlHeader: string = "http://localhost:3000/header/0";
  apiUrlAcercaDe: string = "http://localhost:3000/acercade/0";
  apiUrlEducacion: string = "http://localhost:3000/educacion";
  apiUrlExperiencia: string = "http://localhost:3000/experiencia";
  apiUrlSkills: string = "http://localhost:3000/skills";


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
}
