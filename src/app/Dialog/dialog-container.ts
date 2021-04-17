import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  Directive,
  ViewContainerRef,
  ViewChild,
  ElementRef,
  Type
} from '@angular/core';

import {AdComponent} from './dialog-content';

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
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}
  close() {
    alert("close");
  }

  setComponent(contentCompoent?: Type<any>, config?: {
    data?: any
  }) {
    if (contentCompoent) {
      const contentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(contentCompoent);
      const viewContainerRef = this.dialogContent.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(contentComponentFactory);
      componentRef.instance.data = config.data;
    }
  }
}

