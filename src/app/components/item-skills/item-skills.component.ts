import { Component, OnInit, Input } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsService } from 'src/app/services/skills.service';
import { skills } from 'src/app/data/skills-interface';


@Component({
  selector: 'app-item-skills',
  templateUrl: './item-skills.component.html',
  styleUrls: ['./item-skills.component.css']
})
export class ItemSkillsComponent implements OnInit {

  @Input() datos: any;

  skillsInfo: any = []

  constructor(private SkillsService: SkillsService) { }

  ngOnInit(): void {
    this.SkillsService.obtenerDatosSkills().subscribe(
      (data) => {
        this.skillsInfo = data;
      }
    );
  }

}
