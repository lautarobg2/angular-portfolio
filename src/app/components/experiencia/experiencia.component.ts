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

  experienciaInfo: experiencia[] = [];
             
  newExp: experiencia = newEXP;

  expSelected?: experiencia;

  faTimes = faTimes;

  usuarioLogueado: Boolean = false;


  constructor(private AllDataService: AllDataService, public AuthService: AuthService, private UiService: UiService) { }



  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();

    this.reloadData();

  }

  reloadData(){
    this.AllDataService.getDatosExperiencia().subscribe(
      (data) => {
        this.experienciaInfo = data;
      }
    );

  }

  addExperiencia(experiencia:experiencia){
    this.AllDataService.addExperiencia(experiencia).subscribe(
      (experiencia) => (
      this.experienciaInfo.push(experiencia)
    ));
    this.reloadData();
    alert("¡El item se agregó correctamente!");
  }

  
  onDeleteExperiencia(experiencia:experiencia){
    if(confirm("¿Seguro que quiere borrar el item?")){

    this.AllDataService.onDeleteExperiencia(experiencia)
    .subscribe( 
      ()=>{
      this.experienciaInfo = this.experienciaInfo.filter( (t) => {
        return t.id !== experiencia.id
      })
    })
  }
  this.reloadData();
}

  onSelectEdit(index: number){
    this.expSelected = this.experienciaInfo[index];
  }

  onUpdate(){
    this.AllDataService.saveEditExperiencia(this.expSelected).subscribe(
      (response) => {
        this.reloadData();
      }
    );
    alert("¡La información ha sido actualizada correctamente!");
  }




}
