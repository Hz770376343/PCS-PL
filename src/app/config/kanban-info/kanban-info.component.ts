import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-kanban-info',
  templateUrl: './kanban-info.component.html',
  styleUrls: ['./kanban-info.component.css'],
})
export class KanbanInfoComponent  implements OnInit, OnDestroy {

  constructor(private router: Router, route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
