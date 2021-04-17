import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent , TestComponent} from './app.component';
import { Dialog } from './Dialog/dialog';
import { DialogContainer, DialogContentDirective } from './Dialog/dialog-container';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, DialogContentDirective, DialogContainer
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [Dialog],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent]
})
export class AppModule { }
