import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import defaultLanguage from '../assets/i18n/de.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'I18N';

    @ViewChild('dropdownflags') private dropdownflagsElement?: ElementRef;
    dropdownflags: any;

    languages = ['us', 'de', 'fr', 'sp'];
    lang = 'us';

    constructor(
        private translate: TranslateService,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
        console.log('AppComponent/constructor: setTranslations');
        translate.setTranslation('de', defaultLanguage);
        translate.setDefaultLang('de');

        translate.langs.forEach((lang) => {
            console.log(lang);
        });
    }

    ngOnInit(): void {}

    onClick(event: any) {
        this.useLanguage(event.target.innerText);
    }

    useLanguage(language: string): void {
        console.log('AppComponent/constructor: useLanguage ' + language);
        this.translate.use(language.toLowerCase());
    }
}
