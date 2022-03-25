import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from "./user.component";

@NgModule({
    imports: [SharedModule],
    declarations: [EditUserComponent, UserDetailsComponent, UserComponent]
})
export class UserModule{}