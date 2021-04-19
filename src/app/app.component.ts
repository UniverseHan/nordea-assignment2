import { Component, Injector, Input } from '@angular/core';

import { Dialog } from './Dialog/dialog';
import {AdComponent} from './Dialog/dialog-content';

import { PurchaseDialogComponent } from './purchase.dialog.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment2';

  constructor(public dialogService: Dialog, public injector: Injector) {}

  openDialog() {
    this.dialogService.open('Hello Dialog', PurchaseDialogComponent, {
      data: {
        headline: "Helloi",
        body: "hahahaha this is body"
      }
    });
  }
}

@Component({
  template: `
    <div class="job-ad">
      <h4>{{ data.body }}</h4>
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}



