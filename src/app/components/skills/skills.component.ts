import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { skills } from 'src/app/data/skills-interface';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AuthService } from 'src/app/services/auth.service';
import { newSK } from 'src/app/mocks/mockSkill';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  newSK: skills = newSK;

  skillsInfo: skills[] = [];

  usuarioLogueado: Boolean = false;

  constructor(private AllDataService: AllDataService, public AuthService: AuthService) { }

  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();

    this.AllDataService.getDatosSkills().subscribe(
      (data) => {
        this.skillsInfo = data;
      }
    );

  }

  addSkill(skills:skills){
    this.AllDataService.addSkill(skills).subscribe((skills) => (
      this.skillsInfo.push(skills)
    ));
  }


  onDeleteSkill(skills:skills){
    this.AllDataService.onDeleteSkill(skills)
    .subscribe( 
      ()=>{
      this.skillsInfo = this.skillsInfo.filter( (t) => {
        return t.id !== skills.id
      })
    })
  }


}
