import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private readonly authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.form.get("name")?.value, this.form.get("password")?.value);
  }

}
