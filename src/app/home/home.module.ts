import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home.component";
import { HOME_ROUTES } from "./home.routes";
import { UserModule } from "./users/user/user.module";

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES), UserModule, HttpClientModule],
    declarations: [HomeComponent, HeaderComponent]
})
export class HomeModule{}