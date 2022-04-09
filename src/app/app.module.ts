import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './Components/inicio/inicio.component';
import { CardsComponent } from './Components/cards/cards.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

//Servicios
import{ UsuariosService} from './servicios/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CardsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
