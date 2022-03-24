import { Route } from "@angular/router";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";

export const HOME_ROUTES: Route[] = [
    {
        path: '',
        component: UserDetailsComponent,
        children: [{
            path: ':id/edit',
            component: EditUserComponent
        }]
    },
    
]