import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { BloodDonar } from './blood-donar';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class DonarAPIService {

  constructor(private http:HttpClient) { }

  findAll(): Observable<BloodDonar[]>{
    return this.http.get<BloodDonar[]>('http://localhost:3000/bloodDonars');
  }
}
