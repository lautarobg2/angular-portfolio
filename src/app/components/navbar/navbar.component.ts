import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioLogueado: Boolean = false;
  form: FormGroup;
  loginError: Boolean = false;

  constructor(private AuthService: AuthService, private formBuilder: FormBuilder, private router: Router,) 
  {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(10)]]
      }
    )
  }
  

  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();

    }

    onSubmit(event: Event) {
      event.preventDefault;

      this.AuthService.login(this.form.value).subscribe(
        (response: Boolean) => {
          if (response)
            window.location.reload();
          else
            window.alert("El email y/o contraseña son incorrectos!");
            this.loginError = true;
        }
      );
    }


  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  logOut(): void {
    this.AuthService.logOut();
    this.usuarioLogueado = false;
    window.location.reload();
  }


  }


