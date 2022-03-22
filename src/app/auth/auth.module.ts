import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LOGIN_ROUTES } from "./login/login.routes";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(LOGIN_ROUTES),
        ReactiveFormsModule
    ]
})
export class AuthModule{

}