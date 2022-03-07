import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,  
    CommonModule,
    NgCircleProgressModule.forRoot({
      backgroundGradient: true,
      backgroundColor: "#ffffff",
      backgroundGradientStopColor: "#c0c0c0",
      backgroundPadding: -5,
      radius: 60,
      space: -10,
      maxPercent: 100,
      unitsFontSize: "25",
      unitsFontWeight: "600",
      outerStrokeWidth: 13,
      outerStrokeColor: "#61A9DC",
      outerStrokeLinecap: "round",
      innerStrokeWidth: 18,
      titleFontSize: "27",
      titleFontWeight: "600",
      subtitleColor: "#444444",
      subtitleFontSize: "12",
      subtitleFontWeight: "600",
      imageHeight: 127,
      imageWidth: 145,
      showInnerStroke: false,
      clockwise: false,
      startFromZero: false,
      animation: true,
      showUnits: true,
      animationDuration: 100,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
