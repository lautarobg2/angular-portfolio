import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { educacion } from 'src/app/data/educacion-interface';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { newEDU } from 'src/app/mocks/mock';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

             //  VARIABLES MODAL DE AGREGAR NUEVO ESTUDIO


  newEdu: educacion = newEDU;

  eduSelected?: educacion;;
 
  faTimes = faTimes;

  educacionInfo: educacion[] = [];


  constructor(private AllDataService: AllDataService, public AuthService: AuthService, private UiService: UiService) { }

  usuarioLogueado:boolean= false;

  receiveLoginEvent(){
    this.usuarioLogueado = this.AuthService.usuarioLogueado;
  }

  ngOnInit(): void {

    this.AllDataService.getDatosEducacion().subscribe(
      (data) => {
        this.educacionInfo = data;
      }
    );
  
  }

  addEducacion(educacion:educacion){
    this.AllDataService.addEducacion(educacion).subscribe((educacion) => (
      this.educacionInfo.push(educacion)
    ));
  }

  onDeleteEducacion(educacion:educacion){
    this.AllDataService.onDeleteEducacion(educacion)
    .subscribe( 
      ()=>{
      this.educacionInfo = this.educacionInfo.filter( (t) => {
        return t.id !== educacion.id
      })
    })
  }

  onSelectEdit(index: number){
    this.eduSelected = this.educacionInfo[index];
  }

  onUpdate(){
    this.AllDataService.saveEditEducacion(this.eduSelected);
  }


}
