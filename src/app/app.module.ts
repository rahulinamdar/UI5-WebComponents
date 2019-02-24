import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Icon";
import "@ui5/webcomponents/dist/Table"; 
import "@ui5/webcomponents/dist/Toolbar"; 
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
