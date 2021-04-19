import { Dialog } from './dialog';
import {
  ComponentFixture, 
  inject, TestBed} from '@angular/core/testing';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  Directive
} from '@angular/core';

describe('dialog', () => {
  let dialog: Dialog;
  let viewContainerFixture: ComponentFixture<ComponentWithChildViewContainer>;

  beforeEach(inject([Dialog], (d: Dialog) => {
    dialog = d;
    viewContainerFixture = TestBed.createComponent(ComponentWithChildViewContainer);
    viewContainerFixture.detectChanges()
  }));

  afterEach(() => {
    dialog.ngOnDestroy();
  });

  it('should add container when dialog open', () => {
    dialog.open("Hello Dialog");
    viewContainerFixture.detectChanges();
    expect(document.querySelector('.dialog-container'))
        .not.toBeNull('Expected the dialog container in the DOM after opening dialog');
  });

  it('should have only one container', () => {
    dialog.open("Hello Dialog");
    viewContainerFixture.detectChanges();

    dialog.open("Hello Dialog");
    viewContainerFixture.detectChanges();
    
    const containers = document.querySelectorAll('.dialog-container');
    expect(containers.length).toBe(1);
  });

  it('should have title', () => {
    dialog.open("Hello Dialog");

    viewContainerFixture.detectChanges();

    const titleElement = document.querySelector('.dialog-title');
    expect(titleElement).not.toBeNull('Expected the dialog title in the DOM after opening dialog');
    expect(titleElement.textContent).toEqual('Hello Dialog');
  });
});

@Directive({selector: 'dir-with-view-container'})
class DirectiveWithViewContainer {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'arbitrary-component',
  template: `<dir-with-view-container *ngIf="showChildView"></dir-with-view-container>`,
})
class ComponentWithChildViewContainer {
  showChildView = true;

  @ViewChild(DirectiveWithViewContainer) childWithViewContainer: DirectiveWithViewContainer;

  get childViewContainer() {
    return this.childWithViewContainer.viewContainerRef;
  }
}

