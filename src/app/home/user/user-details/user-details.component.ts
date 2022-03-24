import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/interfaces/user-details.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: UserDetails;

  constructor(private readonly userService: UserService, private readonly router: Router) { }

  ngOnInit(): void {this.userService.getUser(4).subscribe((res: UserDetails) => this.user = res);
  }

  editProfile(): void{
    this.router.navigate([`${4}/edit`])
  }

}
