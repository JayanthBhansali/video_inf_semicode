import { Component, OnInit } from '@angular/core';
import { NavigationclassComponent} from '../navigationclass/navigationclass.component'
import { MyaccountComponent } from '../myaccount/myaccount.component';

@Component({
  selector: 'app-artistpref',
  templateUrl: './artistpref.component.html',
  styleUrls: ['./artistpref.component.css']
})
export class ArtistprefComponent implements OnInit {
  artistname:string[];
  constructor() { 
    this.artistname=["ABC","DEF","GHI"];
  }
  
  ngOnInit(): void {
  }

}
