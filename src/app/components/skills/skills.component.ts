import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { skills } from 'src/app/data/skills-interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

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
