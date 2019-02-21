import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RespostaComponent } from './resposta/resposta.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormularioService } from './formulario.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    RespostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [FormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
