import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent  implements OnInit, OnDestroy {

  constructor(private router: Router, route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
