import { Component, OnInit,ViewChild,AfterContentInit } from '@angular/core';
import { PastcampsComponent } from '../pastcamps/pastcamps.component';
import { FuturecampsComponent } from '../futurecamps/futurecamps.component';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit, AfterContentInit{

  @ViewChild(PastcampsComponent) past: PastcampsComponent;
  @ViewChild(FuturecampsComponent) upcoming : FuturecampsComponent;
  old : string[];
  new : string[];
  info : string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
   this.old= this.past.campList;
   this.new =  this.upcoming.campList;
   this.info = this.past.comments();
  }

}
