import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LOGIN_ROUTES } from "./auth.routes";
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        RouterModule.forChild(LOGIN_ROUTES),
        ReactiveFormsModule
    ]
})
export class AuthModule{

}