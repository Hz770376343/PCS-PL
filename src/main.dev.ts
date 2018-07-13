import {ApplicationRef, enableProdMode, NgModuleRef} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import './polyfills';
import 'hammerjs';
import {AppModule} from './app/app.module';

import {hmrBootstrap} from './hmr';

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

if (module.hot) {
  hmrBootstrap(module, bootstrap);
} else {
  enableProdMode();
  platformBrowserDynamic().bootstrapModule(AppModule);
}
