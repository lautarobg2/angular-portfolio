import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { experiencia } from 'src/app/data/experiencia-interface';
import { AuthService } from 'src/app/services/auth.service';
import { newEXP } from 'src/app/mocks/mockExp';
import { UiService } from 'src/app/services/ui.service';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

               //  VARIABLES MODAL DE AGREGAR NUEVO ESTUDIO

  id?: number;
  img: string = "";
  title: string = "";
  description: string = "";
  time: string = "";

newExp: experiencia = newEXP;

faTimes = faTimes;

experienciaInfo: experiencia[] = [];


  constructor(private AllDataService: AllDataService, public AuthService: AuthService, private UiService: UiService) { }

  usuarioLogueado:boolean= false;

  receiveLoginEvent(){
    this.usuarioLogueado = this.AuthService.usuarioLogueado;
  }

  ngOnInit(): void {

    const { id, img, title, description, time } = this
    const newEdu = { id, img, title, description, time }

    this.AllDataService.getDatosExperiencia().subscribe(
      (data) => {
        this.experienciaInfo = data;
      }
    );

  }

  addExperiencia(experiencia:experiencia){
    this.AllDataService.addExperiencia(experiencia).subscribe((experiencia) => (
      this.experienciaInfo.push(experiencia)
    ));
  }

  
  onDeleteExperiencia(experiencia:experiencia){
    this.AllDataService.onDeleteExperiencia(experiencia)
    .subscribe( 
      ()=>{
      this.experienciaInfo = this.experienciaInfo.filter( (t) => {
        return t.id !== experiencia.id
      })
    })
  }



}
