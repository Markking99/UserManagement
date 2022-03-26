import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User, UserDetails } from 'src/app/interfaces/user-details.interface';
import { UserService } from 'src/app/services/user/user.service';
import {MatDialog} from '@angular/material/dialog';
import { UserDialogComponent } from '../user/user-dialog/user-dialog.component';


@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.css']
})
export class UsersOverviewComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'action'];

  dataSource!: MatTableDataSource<User>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  users!: User[];
  constructor(private readonly userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users['data']
    this.dataSource = new MatTableDataSource<User>(this.users);

    this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
  }

  updateUser(row: User){
    this.dialog.closeAll()
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: row,
    });
  }

  deleteUser(row: User){

  }
}
