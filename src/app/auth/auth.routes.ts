import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const LOGIN_ROUTES: Route[] = [
    {
        path: '',
        component: LoginComponent
    }
]