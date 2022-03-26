import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule, MatFormFieldModule],
    exports: [CommonModule, ReactiveFormsModule, RouterModule, MatFormFieldModule],
})
export class SharedModule {}