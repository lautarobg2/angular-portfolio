import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { experiencia } from 'src/app/data/experiencia-interface';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaInfo: any;

  constructor(private AllDataService: AllDataService) { }

  ngOnInit(): void {
    this.AllDataService.getDatosExperiencia().subscribe(
      (data) => {
        this.experienciaInfo = data;
      }
    );
  }

}
