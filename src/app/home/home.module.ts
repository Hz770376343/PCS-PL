import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'PCS-PL/home', component: HomePageComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    HomePageComponent
  ],
  providers: [],
  exports: [
    HomePageComponent
  ],
})
export class HomeModule {
}
