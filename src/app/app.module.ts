import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {BrowserModule, HammerGestureConfig} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {RouterModule} from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ApolloLink} from 'apollo-link';
import {withClientState} from 'apollo-link-state';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ConfigModule} from './config/config.module';
import {HomeModule} from './home/home.module';

export class MyErrorHandler extends ErrorHandler {
  handleError(error: any): void {
    alert(error.toString());
  }
}


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


// region hmr
if (module.hot) {
  if (module.hot && module.hot.data && module.hot.data.rootState) {
    console.log(module.hot.data.rootState, 'previous ngrx state');
  }
}

// endregion

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule,
    HttpClientModule,
    ConfigModule,
    HomeModule
  ],
  providers: [HammerGestureConfig, {
    provide: ErrorHandler,
    useClass: MyErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo,
              httpLink: HttpLink) {

    // region hmr restore ngrx state
    if (module.hot) {}

    // endregion
    // region apollo
    const inMemoryCache = new InMemoryCache(
      {
        dataIdFromObject: (o: any) => o.uuid,
         // Prevent backstage service  feedback _typename column
         // addTypename: false,
      }
    );

    const stateLink = withClientState({
      cache: inMemoryCache,
      resolvers: {},
      defaults: {}
    });

    apollo.create({
      link: ApolloLink.from([stateLink, httpLink.create({uri: environment.host + 'graphql'})]),
      cache: inMemoryCache
    });
    // endregion
  }
}
