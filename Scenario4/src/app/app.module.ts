import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
