import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pastcamps',
  templateUrl: './pastcamps.component.html',
  styleUrls: ['./pastcamps.component.css']
})
export class PastcampsComponent implements OnInit {
  campList = ['25-2-2018, Coimbatore','21-5-2018, Ranchi'];
  constructor() { }

  ngOnInit() {
  }

  comments(){
    return 'we donated 500 units of blood from the Camps';
  }
}
