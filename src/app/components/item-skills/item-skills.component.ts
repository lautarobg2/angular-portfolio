import { Component, OnInit, Input } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AllDataService } from 'src/app/services/all-data.service';
import { skills } from 'src/app/data/skills-interface';


@Component({
  selector: 'app-item-skills',
  templateUrl: './item-skills.component.html',
  styleUrls: ['./item-skills.component.css']
})
export class ItemSkillsComponent implements OnInit {

  @Input() datos: any;

  skillsInfo: any;

  constructor(private AllDataService: AllDataService) { }

  ngOnInit(): void {
    this.AllDataService.getDatosSkills().subscribe(
      (data) => {
        this.skillsInfo = data;
      }
    );
  }

}
