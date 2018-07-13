import {NgModuleRef, ApplicationRef} from '@angular/core';
import {createNewHosts} from '@angularclass/hmr';

export function hmrRing(): void {
  const audio = new Audio('/assets/ring2.mp3');
  audio.play();
}

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(mod => {
    ngModule = mod;
    hmrRing();
  });
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
