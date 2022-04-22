import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { proyects } from 'src/app/data/proyects-interface';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectsInfo: proyects[] = []

  proSelected?: proyects;


  usuarioLogueado: Boolean = false;

  constructor(private AllDataService: AllDataService, public AuthService: AuthService) { }

  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();


    this.AllDataService.getDatosProyects().subscribe(
      (data) => {
        this.proyectsInfo = data;
      }
    );

  }

  onDeleteProyect(proyects:proyects){
    this.AllDataService.onDeleteProyect(proyects)
    .subscribe( 
      ()=>{
      this.proyectsInfo = this.proyectsInfo.filter( (t) => {
        return t.id !== proyects.id
      })
    })
    window.location.reload();
  }

  onSelectEdit(index: number){
    this.proSelected = this.proyectsInfo[index];
  }

  onUpdate(){
    this.AllDataService.saveEditProyect(this.proSelected);
  }



}
