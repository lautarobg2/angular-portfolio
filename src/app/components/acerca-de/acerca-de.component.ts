import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { acercade } from 'src/app/data/acerca-de-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercadeInfo: acercade[] = [];

  aboutSelected?: acercade;

  usuarioLogueado: Boolean = false;

  constructor(private AllDataService: AllDataService, public AuthService: AuthService) { }

  
  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();


      this.AllDataService.getDatosAcercaDe().subscribe(
        (data) => {
          this.acercadeInfo = data;
        }
      );
    }

    onSelectEdit(index: number){
      this.aboutSelected = this.acercadeInfo[index];
    }
  

  
    onUpdate(){
      this.AllDataService.saveEditAcercaDe(this.aboutSelected).subscribe(
        (response) => {
          this.ngOnInit();
        }
      );
    }
  

  
  }
  
