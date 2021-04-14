import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'dialog-container',
  templateUrl: 'dialog-container.html',
  styleUrls: ['dialog.scss'],
  host: {
    'class': 'content-container'
  }
})
export class DialogContainer implements OnInit {
  @Input() title;

  ngOnInit() {}
}