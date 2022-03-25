import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserDetails } from 'src/app/interfaces/user-details.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(null),
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    avatar: new FormControl(null)
  })


  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute, private readonly userService: UserService) { }

  ngOnInit(): void {
    let id: number;
    this.userService.getUser(4)
      .subscribe(user => {
        this.form.patchValue(user.data);
      });
  }

  onSubmit(): void {
    this.router.navigate([''])
  }

}
