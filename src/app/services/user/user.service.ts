import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/interfaces/user-details.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userUrl: string = "https://reqres.in";

  constructor(private readonly http: HttpClient) { }

  getUser(id: number) : Observable<UserDetails>{
    return this.http.get<UserDetails>(`${this.userUrl}/api/users/${id}`)
  }

  getUsers() : Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(`${this.userUrl}/api/users`)
  }
}
