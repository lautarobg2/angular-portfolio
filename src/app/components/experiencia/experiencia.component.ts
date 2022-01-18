import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { experiencia } from 'src/app/data/experiencia-interface';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaInfo: any = []

  constructor(private ExperienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.ExperienciaService.obtenerDatosExperiencia().subscribe(
      (data) => {
        this.experienciaInfo = data;
      }
    );
  }

}
