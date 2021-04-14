import { Component } from '@angular/core';
import { Dialog } from './Dialog/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment2';

  constructor(public dialogService: Dialog) {

  }

  openDialog() {
    this.dialogService.open('Hello Dialog');
  }

}
