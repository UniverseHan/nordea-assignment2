import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PurchaseDialogComponent } from './purchase.dialog.component';
import { DialogModule } from './Dialog/dialog-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    PurchaseDialogComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
