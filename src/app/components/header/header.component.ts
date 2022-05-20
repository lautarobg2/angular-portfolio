import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { header } from 'src/app/data/header-interface';
import { AuthService } from 'src/app/services/auth.service';
import { preData } from 'src/app/mocks/mockPreData';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerInfo: header = preData;

  usuarioLogueado: Boolean = false;

  constructor(private AllDataService: AllDataService, public AuthService: AuthService) { }

  ngOnInit(): void {

    this.usuarioLogueado = this.AuthService.usuarioLogueado();


    this.AllDataService.getDatosHeader().subscribe(
      (data) => {
        this.headerInfo = data[0];
      }
    );
  }

}
