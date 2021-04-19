import { NgModule } from '@angular/core';

import { Dialog } from './dialog';
import { DialogContainer, DialogContentDirective} from './dialog-container';
import { DialogClose } from './dialog-directive';

@NgModule({
  exports: [
    DialogContainer,
    DialogContentDirective,
    DialogClose
  ],
  declarations: [
    DialogContainer,
    DialogContentDirective,
    DialogClose
  ],
  providers: [
    Dialog,
  ],
  entryComponents: [DialogContainer]
})
export class DialogModule {}