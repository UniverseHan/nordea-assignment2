import {
  Directive,
  Input,
  OnInit
} from '@angular/core';
import { DialogContainer } from './dialog-container';
import { Dialog } from './dialog';

@Directive({
  selector: '[dialog-close], [DialogClose]',
  exportAs: 'DialogClose',
  host: {
    '(click)': '_onButtonClick($event)',
    '[attr.type]': 'type',
  }
})
export class DialogClose implements OnInit {
  @Input() type: 'submit' | 'button' | 'reset' = 'button';

  @Input('dialog-close') dialogResult: any;
  @Input('DialogClose') _DialogClose: any;

  constructor(
    private dialogContainer: DialogContainer,
    private _dialog: Dialog) {
  }

  ngOnInit() {
    console.log('dialog container', this.dialogContainer);
    console.log('dialog close', this._dialog);
  }

  _onButtonClick(event: MouseEvent) {
    this._dialog.close(null);
  }
}