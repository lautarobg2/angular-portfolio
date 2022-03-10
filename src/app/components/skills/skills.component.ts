import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { skills } from 'src/app/data/skills-interface';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  faTimes = faTimes;

  skillsInfo: any;

  constructor(private AllDataService: AllDataService, public AuthService: AuthService) { }

  ngOnInit(): void {
    this.AllDataService.getDatosSkills().subscribe(
      (data) => {
        this.skillsInfo = data;
      }
    );

  }

}
