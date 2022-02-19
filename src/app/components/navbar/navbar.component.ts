import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogueado: boolean = false;

  loguearUsuario(){
    this.usuarioLogueado = true;
     
  }
 
 desloguearUsuario(){
   this.usuarioLogueado = false;
 }

  constructor(private AuthService: AuthService) { }
  

  ngOnInit(): void {

    }

  }


