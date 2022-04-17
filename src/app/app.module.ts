import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingiComponent } from './rankingi/rankingi.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingiComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
