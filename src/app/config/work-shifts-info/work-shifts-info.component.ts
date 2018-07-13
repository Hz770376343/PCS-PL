import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-work-shifts-info',
  templateUrl: './work-shifts-info.component.html',
  styleUrls: ['./work-shifts-info.component.css'],
})
export class WorkShiftsInfoComponent  implements OnInit, OnDestroy {

  constructor(private router: Router, route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
