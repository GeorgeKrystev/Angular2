import { Component } from '@angular/core';
import { SelectComponent } from './select.component'
import {ContactFormComponent} from './contact-form.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SelectComponent, ContactFormComponent] 
})
export class AppComponent {
  title = 'app works!';
}
