import { Component, Injector, Input , ViewChild} from '@angular/core';
import { Dialog } from './Dialog/dialog';
import {AdComponent} from './Dialog/dialog-content';
import { DialogContentDirective } from './Dialog/dialog-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment2';

  constructor(public dialogService: Dialog, public injector: Injector) {}

  openDialog() {
    this.dialogService.open('Hello Dialog', HeroJobAdComponent, {
      data: {
        headline: "Helloi",
        body: "hahahaha this is body"
      },
      injector: this.injector
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

@Component({
  selector: 'test-component',
  template: `
    <div class="job-ad">
      <h1> Test Component</h1>
    </div>
  `
})
export class TestComponent {
  @Input() data: any;
}
