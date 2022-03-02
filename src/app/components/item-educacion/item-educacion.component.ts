import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { educacion } from 'src/app/data/educacion-interface';
import { AuthService } from 'src/app/services/auth.service';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent implements OnInit {

  @Input() educacion:any;
  
 
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

  onDelete(educacion:educacion){
    console.log("hola")
    this.EducacionService.onDelete(educacion)
    .subscribe(
      ()=>{
        this.educacionInfo = this.educacionInfo.filter( (t) => {
          return t.id !== educacion.id
        })
      })
  }


}

