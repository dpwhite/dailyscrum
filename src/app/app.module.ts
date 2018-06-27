import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTabsetBasic } from './projects/dailyscrum.component';
import { NgbdAccordionBasic } from './accordion.component';


@NgModule({
  imports: [BrowserModule, NgbModule.forRoot()],
  declarations: [AppComponent, NgbdTabsetBasic, NgbdAccordionBasic],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
