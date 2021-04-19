
import {DOCUMENT} from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Inject,
  Injector,
  OnDestroy,
  Type,
  StaticProvider
} from '@angular/core';
import { DialogContainer } from './dialog-container';

@Injectable({
  providedIn: 'root',
 })
export class Dialog implements OnDestroy {
  protected _document: Document;
  protected container: HTMLElement;
  private _disposeFn: (() => void) | null;  

  constructor(@Inject(DOCUMENT) document: any, 
    private componentFactoryResolver: ComponentFactoryResolver, 
    private _defaultInjector: Injector,
    private _appRef: ApplicationRef) {
    this._document = document;
  }

  open(title, contentCompoent?: Type<any>, config?: {
    data?: any
  }) {
    if (!this.container) {
      this.container = this._createOveray();
      this._document.body.append(this.container);
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogContainer);
    const dialogContinaerRef = componentFactory.create(this._defaultInjector);

    this._appRef.attachView(dialogContinaerRef.hostView);
    this.setDisposeFn(() => {
      this._appRef.detachView(dialogContinaerRef.hostView);
      dialogContinaerRef.destroy();
    });
    dialogContinaerRef.instance.title = title;

    const injector = this.createInjector(dialogContinaerRef);

    if (contentCompoent) {
      dialogContinaerRef.instance.setComponent(contentCompoent, {
        data: (config && config.data) || {},
        injector
      });
    }    

    this.container.appendChild(this._getComponentRootNode(dialogContinaerRef));
  }

  close(dialogContainer: DialogContainer) {
    this.dispose();
  }

  createInjector(dialogContinaerRef: ComponentRef<DialogContainer>): Injector {
    const providers: StaticProvider[] = [
      {provide: DialogContainer, useValue: dialogContinaerRef.instance},
      {provide: Dialog, useValue: this}
    ];

    return Injector.create({
      parent: this._defaultInjector,
      providers
    });
  }

  ngOnDestroy() {
    const container = this.container;
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    delete this.container;
  }

  private _getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }

  _createOveray() {
    const containerClass = 'dialog-container';
    const container = this._document.createElement('div');
    container.classList.add(containerClass);
    return container;
  }

  setDisposeFn(fn: () => void) {
    this._disposeFn = fn;
  }
 
  dispose(): void {
    this._invokeDisposeFn();
  }

  private _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
}