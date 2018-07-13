import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {WorkShiftsInfoComponent} from './work-shifts-info/work-shifts-info.component';
import {KanbanInfoComponent} from './kanban-info/kanban-info.component';

const routes: Routes = [
  {path: 'PCS-PL/kanban', component: KanbanInfoComponent},
  {path: 'PCS-PL/workshifts', component: WorkShiftsInfoComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    KanbanInfoComponent,
    WorkShiftsInfoComponent
  ],
  providers: [],
  exports: [
    KanbanInfoComponent,
    WorkShiftsInfoComponent
  ],
})
export class ConfigModule {
}
