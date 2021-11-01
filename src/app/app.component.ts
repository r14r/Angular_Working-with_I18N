import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import defaultLanguage from '../assets/i18n/de.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'I18N';

    languages = ['us', 'de', 'fr', 'sp'];
    currentlang = 'us';

    constructor(
        private translate: TranslateService
    ) {
        console.log('AppComponent/constructor: setTranslations');
        this.currentlang = 'de';
        translate.setTranslation(this.currentlang, defaultLanguage);
        translate.setDefaultLang(this.currentlang);
    }

    ngOnInit(): void {}

    useLanguage(language: string): void {
        this.currentlang = language;
        
        console.log('AppComponent/constructor: useLanguage "' + language + '"');
        this.translate.use(language.toLowerCase());
    }
}
