import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(translate: TranslateService, activatedRoute: ActivatedRoute, router: Router) {}
}
