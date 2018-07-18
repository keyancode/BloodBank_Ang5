import { Component, OnInit } from '@angular/core';
import { BloodDonar } from '../blood-donar';
import { DonarAPIService } from '../donar-api.service';

@Component({
  selector: 'app-show-donar',
  templateUrl: './show-donar.component.html',
  styleUrls: ['./show-donar.component.css']
})
export class ShowDonarComponent implements OnInit {
  bloodDonars : BloodDonar[];  
  resetDisabled : boolean;
  constructor(private service:DonarAPIService) { 
    this.resetDisabled = true;
   /* this.bloodDonars = [
      { id: 1, name: "Suresh", mobileNumber: 772949449, age: 35, bgroup: "opos", location: "chennai" },
      { id: 2, name: "Ramesh", mobileNumber: 772949449, age: 25, bgroup: "bpos", location: "chennai" }
    ];*/
  }

  ngOnInit() {
    
  }
  show (){
    this.service.findAll().
    subscribe(resp => this.bloodDonars = resp);
    this.resetDisabled = false;
  }

  clear (){
    this.bloodDonars = [];
    this.resetDisabled = true;
  }
}
