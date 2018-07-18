import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futurecamps',
  templateUrl: './futurecamps.component.html',
  styleUrls: ['./futurecamps.component.css']
})
export class FuturecampsComponent implements OnInit {
campList = ['15-8-2018, Chennai','29-8-2018, Bengaluru'];
  constructor() { }

  ngOnInit() {
  }

}
