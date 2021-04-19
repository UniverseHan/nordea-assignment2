import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingDialogComponent } from './rating.dialog.component';
import { DialogModule } from './Dialog/dialog-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowUserInfoDialog} from './show.user.info.dialog';
import { YesOrNoDialog } from './yes.or.no.dialog';

@NgModule({
  declarations: [
    AppComponent, 
    RatingDialogComponent,
    ShowUserInfoDialog,
    YesOrNoDialog
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
