import { Component } from '@angular/core';
import { SelectComponent } from './select.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SelectComponent] 
})
export class AppComponent {
  title = 'app works!';
}
