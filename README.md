# Assignment2
This is first time that I use angular over version 2, I just have experience angularjs, vue, react. I just read about different philosohy between angularjs and angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## requirements
- Dialog should be able to have any Compoent as a its content,
- Dialog should be albe to have form as a its contents.

## non functional requirements
There are three non fuctional requirements. extensiblility, flexibility, useability. I tried define those requirements one by one.

### extensiblility
I assumed extensibility means that it shold be easy to add more functionalites. For example in this context, 
- some event hook should be able to be added for opened, close event. 

### flexibility
I assume flexibility means that it should be easy to change its behavior. For example in this context, 
- easy to change its appearance
- easy to change its default 

- useability
it should be able to use from anywhere.
it should be albe to use from other module or even other application. it might be better definened as a seperated module.

## Todos
- [x] open dialog using dialog service
- [x] make dialog be front
- [x] show dialog container
- [x] show dialog title
- [x] make dialog container to be able to have component as a content
- [x] pass data into dialog content
- [x] single dialog support
- [x] encapsulate dialog as a module
- [ ] close button
- [ ] passing dialog result back to parent.
- [ ] notify data change event back to the parent.
- [ ] be able to bind close action from any element of content component
- [ ] multiple dialog support
- [ ] change dialog appearances

## Implementation Details
### Dialog service
To make dialog easy to use, it could be better to be service. It could be used like `dialog.open("Hello")`.

It can be done by creating javascript class and decorating it as a injectable using `@Injectable` decorator. It also should be added to module as a provider. 

```javascript
@NgModule({
  // ...
  providers: [Dialog],
})
```

To use this dialog service in your component, define class property using dependency injection. For example, 
```javascript
import Dialog fomm './Dialog/dialog';

export class YourComponent {
  constructor(private dialog: Dialog) {}

  //
  handleOpenDialogClick() {
    dialog.open('Hello Dialog');
  }
}
```

### Add overlay into normal DOM body.
Dialog is global element which should be popup front of the screen. It should be added last element and z-indexed.

When function Dialog.open() called, it adds raw `div` HTML element into page's root body element with a style which making it full screen and fixed position. This style makes dialog being horizently and vertically center or somewhere properly.

### Create Dialog
To create component dynamically - ComponentFactoryResolver, ComponentFactory, 
To make changeable - adding it as a app reference using `this._appRef.attachView(componentRef.hostView);`.

## data binding

### bind close button
To give content compoent way to close, I have been thinking about two ways of implementation
- pass dialog's reference to component, compoent could call agreed mathod for example. dialog.close
- using direective, just declare close on the button or submit whatever.
I choose second option, It would be more easy to use and flexible. not need to assume about close method.

I learned this way from angular metrial, I think implementation is impressive. Using injector to pass reference dialog's container, directive can receive reference of container using dependency injection.


## References
To implement below
+ creating overlay for dialog
+ binding between out side of DOM and Angular Compoent
+ creating Angular component dynamically
+ creating service
+ test cases for angular application and component

I refered some manuals and source codes below.
+ [Getting Started](https://angular.io/start)
+ [Angular Material Dialog Service](https://github.com/angular/components/blob/master/src/material/dialog/dialog.ts)
+ [Angular Material Dialog Container](https://github.com/angular/components/blob/master/src/material/dialog/dialog-container.ts)
+ [Angular Material Dialog Test Cases](https://github.com/angular/components/blob/master/src/material/dialog/dialog-container.ts)
+ [Angular Material CDK Overlay](https://github.com/angular/components/tree/master/src/cdk/overlay)
+ [Angular Dom Potal Outlet](https://github.com/angular/components/blob/master/src/cdk/portal/dom-portal-outlet.ts)
+ [Angular Material Portal](https://github.com/angular/components/blob/master/src/cdk/portal/portal.ts)
+ [Angular Element](https://angular.io/guide/elements)
+ [Angular Service and DI](https://angular.io/guide/architecture-services)
+ [Angular Component](https://angular.io/guide/component-overview)
+ [Angular Dynamic Component](https://angular.io/guide/dynamic-component-loader)
