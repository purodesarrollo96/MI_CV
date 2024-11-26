import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*********** MODULOS ************/
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

/*********** COMPONENTES ************/
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({ 
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,       //este es un archivo 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

