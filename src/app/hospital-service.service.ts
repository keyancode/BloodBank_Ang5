import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Hospital } from './hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalServiceService {

  constructor(private http:HttpClient) { }

  findAllHospitals(): Observable<Hospital[]>{
    return this.http.get<Hospital[]>('http://localhost:3000/hospitals');
  }
}
