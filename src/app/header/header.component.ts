import { Component, OnInit} from '@angular/core';
import { SiblingsService } from '../siblings.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nameModel : string; 
  imageLoc : string;
  constructor(private service:SiblingsService) {
    this.nameModel = '';
    this.imageLoc = 'assets/bloodBank.gif';
   }

   ngOnInit() {

    this.service.currentMessage.subscribe(msg =>{
      this.nameModel= msg;
    })
  }

  valName():boolean{
    if(this.nameModel.length>0){
      return true;
    }
    else{
      return false;
    }
  }

}
