import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { skills } from 'src/app/data/skills-interface';
import { ItemSkillsComponent } from '../item-skills/item-skills.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor(private SkillsService: SkillsService) { }

  ngOnInit(): void {
  }

}
