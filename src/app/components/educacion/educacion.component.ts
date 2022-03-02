import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { educacion } from 'src/app/data/educacion-interface';
import { AuthService } from 'src/app/services/auth.service';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
 
  faTimes = faTimes;

  educacionInfo: educacion[] = []

  constructor(private EducacionService: EducacionService, public AuthService: AuthService) { }

  usuarioLogueado:boolean= false;

  receiveLoginEvent(){
    this.usuarioLogueado = this.AuthService.usuarioLogueado;
  }

  ngOnInit(): void {
    this.EducacionService.obtenerDatosEducacion().subscribe(
      (data) => {
        this.educacionInfo = data;
      }
    );

  
  }



}
