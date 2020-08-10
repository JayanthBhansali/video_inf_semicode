import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NavigationclassComponent} from '../navigationclass/navigationclass.component'
import { MyaccountComponent } from '../myaccount/myaccount.component';

@Component({
  selector: 'app-artistpref',
  templateUrl: './artistpref.component.html',
  styleUrls: ['./artistpref.component.css']
})
export class ArtistprefComponent implements OnInit {
  artistname:any[];
  selAddr:number=1;
  selCard:number=1;

  constructor() { 
    this.artistname=[
      {
        id:1,
        name:"ABC",
        address:"AAAAAAAAAAA AAAAAA AAAAAAAAAAAAAA AAAAAA",
        card:"1234",
        exp:"11/2025"
      },
      {
        id:2,
        name:"DEF",
        address:"AAAAAAAAAAA AAAAAA AAAAAAAAAAAAAA AAAAAA",
        card:"1234",
        exp:"11/2025"
      }
    ];
  }

  addr(num:number) {
    this.selAddr=num;
  }
  
  card(num:number) {
    this.selCard=num;
  }

  ngOnInit(): void {
  }

}
