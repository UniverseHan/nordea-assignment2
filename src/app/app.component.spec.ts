import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'assignment2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('assignment2');
  });

  it('should have dialog service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.dialogService).toBeTruthy();
  });

  // should have button to open a dialog
  // should have a button to close the dialog
  // should open dialog when click the button

  // dialog1 should have compoent1

  // dialog2 should have compoent2

  // data should be placed in the dialog

  // data should be palced form

  // dialog should be closed by click x button.

  // dialog should be closed by click any custom button.

  // component beging added to dialog should be notified event fired from dialog.

  
});
