import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private readonly authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login$(this.form.get("name")?.value, this.form.get("password")?.value);
  }

}
