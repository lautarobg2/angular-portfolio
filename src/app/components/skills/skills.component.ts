import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { skills } from 'src/app/data/skills-interface';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AuthService } from 'src/app/services/auth.service';
import { newSK } from 'src/app/mocks/mockSkill';
import { faTimes} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  newSK: skills = newSK;

  skillsInfo: skills[] = [];

  skSelected?: skills;

  usuarioLogueado: Boolean = false;

  faTimes = faTimes;

  constructor(private AllDataService: AllDataService, public AuthService: AuthService) { }

  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();

    this.reloadData();
  }

  reloadData() {
    this.AllDataService.getDatosSkills().subscribe(
      (data) => {
        this.skillsInfo = data;
      }
    );
  }

  addSkill(skills:skills){
    this.AllDataService.addSkill(skills).subscribe(
      (skills) => (
      this.skillsInfo.push(skills)
    ));
this.reloadData();
this.ngOnInit();
}


  onDeleteSkill(skills:skills){
    this.AllDataService.onDeleteSkill(skills)
    .subscribe( 
      (skills)=>{
      this.skillsInfo = this.skillsInfo.filter( (t) => {
        return t.id !== skills.id
      })
    });
    this.reloadData();
  }

  onSelectEdit(index: number){
    this.skSelected = this.skillsInfo[index];
  }

  onUpdate(){
    this.AllDataService.saveEditSkills(this.skSelected).subscribe(
      (response) => {
        this.reloadData();
      }
    );
    console.log(this.skillsInfo);
  }


}
