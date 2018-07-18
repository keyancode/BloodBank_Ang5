import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingsService {
  private messageSource:BehaviorSubject<string> = new
    BehaviorSubject<string>('');

  currentMessage:Observable<string> = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {

    this.messageSource.next(message);
    
    }
}
