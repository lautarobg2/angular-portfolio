import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  usuarioLogueado: boolean = false;

  username: string = "";
  password: string = "";


  loguearUsuario(){
    if(this.username==="lautarobg2" && this.password==="myportfolio99"){
      this.usuarioLogueado = true;
      this.AuthService.usuarioLogueado = true;
    }else{
      alert("Nombre de usuario y/o contraseña son incorrectos");
    }
     
  }
 
 desloguearUsuario(){
   this.usuarioLogueado = false;
   this.AuthService.usuarioLogueado = false;
 }

  constructor(private AuthService: AuthService) { }
  

  ngOnInit(): void {

    }

  }


