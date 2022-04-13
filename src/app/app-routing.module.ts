import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
    {path: 'home', component: AppComponent },
    {path: '', redirectTo: '/home', pathMatch:'full' },
    { path: '**', redirectTo: '/home'}
  ];
  

@NgModule({
  
  
})
export class AppRoutingModule { }