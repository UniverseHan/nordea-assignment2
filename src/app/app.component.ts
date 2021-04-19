import { Component, Injector, Input } from '@angular/core';

import { Dialog } from './Dialog/dialog';
import {AdComponent} from './Dialog/dialog-content';

import { RatingDialogComponent } from './rating.dialog.component'
import { ShowUserInfoDialog } from './show.user.info.dialog';
import { YesOrNoDialog } from './yes.or.no.dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment2';

  constructor(public dialogService: Dialog, public injector: Injector) {}


  showMessage() {
    this.dialogService.open('Welcome simple dialog');
  }


  showUserInfo() {
    this.dialogService.open('Hello Dialog', ShowUserInfoDialog, {
      data: {
        name: 'HanwoolSeok',
        age: 20,
        email: 'hanwool.seok@gmail.com'
      }
    });
  }

  rateService() {
    this.dialogService.open('Hello Dialog', RatingDialogComponent, {
      data: {
        name: 'HanwoolSeok',
        age: 20,
        email: 'hanwool.seok@gmail.com'
      }
    });
  }

  askYesOrNo() {
    this.dialogService.open('Question.', YesOrNoDialog);
  }
}




