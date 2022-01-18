import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { educacion } from 'src/app/data/educacion-interface';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionInfo: educacion[] = []

  constructor(private EducacionService: EducacionService) { }

  ngOnInit(): void {
    this.EducacionService.obtenerDatosEducacion().subscribe(
      (data) => {
        this.educacionInfo = data;
      }
    );
  }

}
