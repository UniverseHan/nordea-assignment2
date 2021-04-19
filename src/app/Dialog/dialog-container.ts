import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  Directive,
  ViewContainerRef,
  ViewChild,
  Type,
  Injector
} from '@angular/core';

import {Dialog} from './dialog';

@Directive({
  selector: '[dialogContent]',
})
export class DialogContentDirective implements OnInit{
  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {}
}

@Component({
  selector: 'dialog-container',
  templateUrl: 'dialog-container.html',
  styleUrls: ['dialog.scss'],
  host: {
    'class': 'content-container'
  }
})
export class DialogContainer implements OnInit {
  @Input() title: string;
  @ViewChild(DialogContentDirective, {static: true}) dialogContent: DialogContentDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, 
    private dialog: Dialog) {

  }

  ngOnInit() {}

  setComponent(contentCompoent?: Type<any>, config?: {
    data?: any;
    injector: Injector
  }) {
    if (contentCompoent) {
      const contentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(contentCompoent);
      const viewContainerRef = this.dialogContent.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(contentComponentFactory, null, config.injector);
      componentRef.instance.data = config.data;
    }
  }

  handleClose() {
    this.dialog.close(this);
  }
}

