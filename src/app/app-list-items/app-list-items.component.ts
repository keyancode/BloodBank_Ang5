import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-list-items',
  templateUrl: './app-list-items.component.html',
  styleUrls: ['./app-list-items.component.css']
})
export class AppListItemsComponent implements OnInit {
  @Input() listItems : string[];
  @Input() src : string;
  @Output() childResult : EventEmitter<string> = new EventEmitter <string>();
  constructor() { }

  ngOnInit() {
  }

  buttonfunc(){
    if(this.src === 'pVal'){
      this.childResult.emit('HEY PARTNER PARENT');
    }else{
      this.childResult.emit('HEY SOCIAL PARENT');
    }
    
  }
}
