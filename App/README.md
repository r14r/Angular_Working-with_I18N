# App I18N

## Install ngx-translate

```
npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save
```

```
npm install @biesbjerg/ngx-translate-extract --save-dev
```

```
"scripts": {
    "extract-translations": "ngx-translate-extract --input ./src --output ./src/assets/i18n/xx.json --clean --sort --format namespaced-json --marker _"
}
```
