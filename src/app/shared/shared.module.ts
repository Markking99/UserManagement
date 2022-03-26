import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule, MatFormFieldModule, MatInputModule],
    exports: [CommonModule, ReactiveFormsModule, RouterModule, MatFormFieldModule, MatInputModule],
})
export class SharedModule {}