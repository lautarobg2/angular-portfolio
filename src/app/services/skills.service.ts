import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skills } from '../data/skills-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }
  obtenerDatosSkills(): Observable<any> {
    return this.http.get<any>("./assets/data/skills.json").pipe(map(res => res.skills));
  }
}
