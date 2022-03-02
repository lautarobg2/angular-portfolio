import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { header } from 'src/app/data/header-interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerInfo: any;

  constructor(private AllDataService: AllDataService) { }

  ngOnInit(): void {
    this.AllDataService.getDatosHeader().subscribe(
      (data) => {
        this.headerInfo = data;
      }
    );
  }

}
