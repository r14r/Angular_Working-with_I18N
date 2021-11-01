import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import defaultLanguage from '../../../assets/i18n/de.json';

@Component({
    selector: 'app-demo-page',
    templateUrl: './component.html',
    styleUrls: ['./component.scss'],
})
export class DemoPageComponent implements OnInit {
    languages = ['us', 'de', 'fr', 'sp'];
    lang = 'us';

    constructor(private translate: TranslateService, public fb: FormBuilder) {
        translate.setTranslation('de', defaultLanguage);
        translate.setDefaultLang('de');

        translate.langs.forEach((lang) => {
            console.log(lang);
        });
    }

    ngOnInit(): void {}

    useLanguage(language: string): void {
        console.log('Change language  to ' + language);
        this.translate.use(language);
    }

    changeLanguage(e: any) {
        console.log(e.value);
    }
}
