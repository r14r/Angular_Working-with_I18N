import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  templateUrl: 'component.html',
})
export class SelectLanguageComponent {
  constructor(public translate: TranslateService) { }
}
