import {
  Component,
} from '@angular/core';

import { Dialog } from './Dialog/dialog';

@Component({
  selector: 'test-component',
  template: `
    <div class="job-ad">
      <h4>Do you want purchase extra service?</h4>
      <button (click)="handleYes()">Yes</button>
      <button dialog-close>No</button>
    </div>
  `
})
export class YesOrNoDialog {
  items = []
  constructor(
    private dialog: Dialog
    ) 
  {}

  handleYes() {
    alert("Purchased!!!");
    this.dialog.close(null);
  }
}