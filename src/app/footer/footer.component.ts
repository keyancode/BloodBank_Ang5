import { Component, OnInit } from '@angular/core';
import { SiblingsService } from '../siblings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  partners : string[];
  social : string[];
  msg : string;
  nameModel : string;
  constructor(private service:SiblingsService) { 
    this.partners = ['Rotary','Agaram','Seed','Maiam'];
    this.social = ['Facebook','Twitter','Instagram'];
  }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => {

      this.nameModel = message;
    });
  }

  newMessage() {

    this.service.changeMessage(this.nameModel);
    
  }

  evalChild(val){
    this.msg = "Child Says : "+val;
  }
}
