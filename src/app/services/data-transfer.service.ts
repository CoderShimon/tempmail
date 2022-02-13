import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  darkTheme = new BehaviorSubject(false);

  toggleDarkTheme(): Observable<any> {
    return this.darkTheme.asObservable();
  }
}
