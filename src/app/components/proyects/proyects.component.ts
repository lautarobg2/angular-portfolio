import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { proyects } from 'src/app/data/proyects-interface';
import { newPROY } from 'src/app/mocks/mockProy';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectsInfo: proyects[] = []

  proSelected?: proyects;

  newPROY: proyects = newPROY;

  faTimes = faTimes;


  usuarioLogueado: Boolean = false;

  constructor(private AllDataService: AllDataService, public AuthService: AuthService) { }

  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();

    this.reloadData();
  }

  reloadData() {
    this.AllDataService.getDatosProyects().subscribe(
      (data) => {
        this.proyectsInfo = data;
      }
    );
  }

  addProyect(proyect:proyects){
    this.AllDataService.addProyect(proyect).subscribe(
      (proyect) => (
      this.proyectsInfo.push(proyect)
    ));
    alert("¡El item se agregó correctamente!");
  }


  onDeleteProyect(proyect:proyects){
    if(confirm("¿Seguro que quiere borrar el item?")){

    this.AllDataService.onDeleteProyect(proyect)
    .subscribe( 
      ()=>{
      this.proyectsInfo = this.proyectsInfo.filter( (t) => {
        return t.id !== proyect.id
      })
    })
  }
}

  onSelectEdit(index: number){
    this.proSelected = this.proyectsInfo[index];
  }

  onUpdate(){
    this.AllDataService.saveEditProyect(this.proSelected).subscribe(
      (response) => {
        this.reloadData();
      }
    );
    alert("¡La información ha sido actualizada correctamente!");
  }



}
