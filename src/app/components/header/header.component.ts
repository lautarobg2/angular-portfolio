import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { header } from 'src/app/data/header-interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerInfo: any = []

  constructor(private HeaderService: HeaderService) { }

  ngOnInit(): void {
    this.HeaderService.obtenerDatosHeader().subscribe(
      (data) => {
        this.headerInfo = data;
      }
    );
  }

}
