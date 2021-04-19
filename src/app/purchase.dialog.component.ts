import {
  Component,
  Input
} from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { DialogClose } from './Dialog/dialog-directive';

@Component({
  selector: 'test-component',
  template: `
    <div class="job-ad">
      <h1> Test Component</h1>
      <div class="cart-item" *ngFor="let item of items">
        <span>{{ item.name }} </span>
        <span>{{ item.price | currency }}</span>
      </div>
      <form [formGroup]="checkoutForm">
        <div>
          <label for="name">
            Name
          </label>
          <input id="name" type="text" formControlName="name">
        </div>
        <div>
          <label for="address">
            Address
          </label>
          <input id="address" type="text" formControlName="address">
        </div>
        <button class="button" type="submit">Purchase</button>
        <button dialog-close>Close</button>
      </form>
    </div>
  `
})
export class PurchaseDialogComponent {
  @Input() data: any;
  items = []
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(private formBuilder: FormBuilder) {}
}