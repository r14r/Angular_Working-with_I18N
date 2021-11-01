import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import defaultLanguage from '../../../assets/i18n/de.json';

@Component({
    selector: 'app-demo-page',
    templateUrl: './component.html',
    styleUrls: ['./component.scss'],
})
export class DemoPageComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {
        console.log('DemoPageComponent/constructor: setTranslations');

        translate.setTranslation('de', defaultLanguage);
        translate.setDefaultLang('de');

        translate.langs.forEach((lang) => {
            console.log(lang);
        });
    }

    ngOnInit(): void {}

    useLanguage(language: string): void {
        console.log('DemoPageComponent/constructor: useLanguage');
        console.log('Change language  to ' + language);
        this.translate.use(language.toLowerCase());
    }
}
