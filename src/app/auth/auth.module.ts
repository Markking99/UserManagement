import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LOGIN_ROUTES } from "./auth.routes";
import { RegisterComponent } from './register/register.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        RouterModule.forChild(LOGIN_ROUTES),
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AuthModule{

}