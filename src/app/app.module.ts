import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AlquilarComponent } from './paginas/alquilar/alquilar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlquilarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
