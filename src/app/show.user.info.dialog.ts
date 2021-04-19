import {
  Component,
  Input
} from '@angular/core'


@Component({
  template: `
    <ul>
      <li>Name: {{data.name}}</li>
      <li>Age: {{data.age}}</li>
      <li>email: {{data.email}}</li>
    </ul>
  `
})
export class ShowUserInfoDialog{
  @Input() data: any;
}
