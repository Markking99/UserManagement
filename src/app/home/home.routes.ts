import { Route } from "@angular/router";
import { EditUserComponent } from "./users/user/edit-user/edit-user.component";
import { UserDetailsComponent } from "./users/user/user-details/user-details.component";
import { UsersOverviewComponent } from "./users/users-overview/users-overview.component";

export const HOME_ROUTES: Route[] = [
    {
        path: '',
        component: UserDetailsComponent,
        children: [{
            path: ':id/edit',
            component: EditUserComponent
        }]
    },
    {
        path: 'users',
        component: UsersOverviewComponent,
    },
    
]