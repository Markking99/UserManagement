import { Injectable } from '@angular/core';
import { LocalStorage } from 'src/app/interfaces/local-storage.interface';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalStorage(): LocalStorage {
    return localStorage as LocalStorage;
  }
}