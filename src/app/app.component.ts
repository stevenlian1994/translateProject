import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translateProject';
  param = {value: 'world'};

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    
    translate.use('en');
  }

}
