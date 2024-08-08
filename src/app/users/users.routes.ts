import { Routes } from "@angular/router";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { TasksService } from "../tasks/tasks.service";

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix'
      },
      {
        path: 'tasks',
        component: TasksComponent,
        runGuardsAndResolvers: 'always', // run resolve function when query parameters change
        resolve: {
          userTasks: resolveUserTasks
        }
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent
      }
    ]
  }
]