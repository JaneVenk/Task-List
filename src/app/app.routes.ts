import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

// const dummyCanMatch: CanMatchFn = (route, segments) => {
//     const router = inject(Router);
//     const shouldGetAccess = Math.random();
//     if (shouldGetAccess < 0.5) {
//         return true;
//     }
//     return new RedirectCommand(router.parseUrl('/unauthorised'));
// };

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        loadChildren: () => import('./users/users.routes').then(mod => mod.routes),
        canMatch: [], // dummyCanMatch
        data: {
            message: 'Hello!'
        },
        resolve: {
            userName: resolveUserName
        }
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]