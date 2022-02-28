import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AcercadeService } from 'src/app/services/acercade.service';
import { acercade } from 'src/app/data/acerca-de-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {


  acercadeInfo: any = []

  constructor(private AcercadeService: AcercadeService, public AuthService: AuthService) { }

  usuarioLogueado:boolean= false;

  receiveLoginEvent(){
    this.usuarioLogueado = this.AuthService.usuarioLogueado;
  }
  
  ngOnInit(): void {
      this.AcercadeService.obtenerDatosAcercaDe().subscribe(
        (data) => {
          this.acercadeInfo = data;
        }
      );
    }

  
  }
  
