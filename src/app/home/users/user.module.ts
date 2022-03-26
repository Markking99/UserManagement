import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { MatTableModule } from "@angular/material/table";
import { UsersOverviewComponent } from "./users-overview/users-overview.component";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { UserDialogComponent } from "./user/user-dialog/user-dialog.component";
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    imports: [MatTableModule, SharedModule, MatPaginatorModule, MatIconModule, MatDialogModule],
    declarations: [EditUserComponent, UserDetailsComponent, UsersOverviewComponent, UserDialogComponent],
    providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
})
export class UserModule { }