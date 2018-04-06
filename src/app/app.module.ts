import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TablePostDirective } from './table-post.directive';
import { PruebaComponent } from './prueba/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    TablePostDirective,
    PruebaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
