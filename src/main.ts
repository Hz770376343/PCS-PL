import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  console.log('current version: 2.0.0');
  console.log('https://github.com/Esquel/PCS-MI/compare/1.1.7...2.0.0');
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

