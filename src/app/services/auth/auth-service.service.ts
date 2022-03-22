import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { LocalStorageService } from '../local-storage/local-storage-service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { Token } from '../../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly accessTokenSource$ = new BehaviorSubject(this.getAccessTokenFromStorage());

  readonly accessToken$ = this.accessTokenSource$.asObservable();

  private readonly userUrl: string = "https://reqres.in";

  constructor(private readonly localStorageService: LocalStorageService, private readonly http: HttpClient) { }


  private getAccessTokenFromStorage(): string | null {
    return this.localStorageService.getLocalStorage().accessToken || null;
  }

  getAccessToken(): string | null{
    return this.accessTokenSource$.getValue();
  }

  login$(username: string, password: string): void {
    const body = { username, password };
    let headers = {};
    this.http
      .post<Token>(`${this.userUrl}/api/login`, body, { headers })
      .subscribe((token)=> this.storeToken(token), (error) => console.error(error))
  }

  logout(): void {
    this.accessTokenSource$.next(null);
    this.localStorageService.getLocalStorage().clear();
    sessionStorage.clear();
  }

  storeToken(token: Token): void {
    const storage = this.localStorageService.getLocalStorage();
    storage.accessToken = JSON.stringify(token.token);

    this.accessTokenSource$.next(token.token);
  }
  
  private getAuthHeaders(): { [header: string]: string } {
    const token = localStorage.getItem('accessToken');
    return { Authorization: `Bearer ${token}` };
  }

  refresh(username: string, password: string): void {
    return this.login$(username, password);
  }
  
}
