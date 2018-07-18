import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalServiceService } from '../hospital-service.service';

@Component({
  selector: 'app-show-hospital',
  templateUrl: './show-hospital.component.html',
  styleUrls: ['./show-hospital.component.css']
})
export class ShowHospitalComponent implements OnInit {
  hospitals : Hospital[];
  resetDisabled : boolean;
  constructor(private service:HospitalServiceService) {
    this.resetDisabled = true;
   }

  ngOnInit() {
  }

  showHosp(){
    this.service.findAllHospitals().
    subscribe(resp => this.hospitals = resp);
    this.resetDisabled = false;
  }

  clearHosp (){
    this.hospitals = [];
    this.resetDisabled = true;
  }
}
