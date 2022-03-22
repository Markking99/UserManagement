import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [RouterModule],
    declarations: [HomeComponent, HeaderComponent]
})
export class HomeModule{}