import { Component, OnInit } from '@angular/core';
import { NavigationclassComponent} from '../navigationclass/navigationclass.component'
import { MyaccountComponent } from '../myaccount/myaccount.component';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  interests:any[];
  interestname:any;
  sizes:string[];
  color_selected:string;
  size_selected:string;

  constructor() {
    //this.interests=["Fashion","Gadgets","DIY Home","Make-Up","Cooking","Electronics"];
    this.interests=[
      {
        name:"Fashion",
        cost:"12.00",
        mrp:"14.00",
        rating:3,
        color:["white","blue","yellow"]
      },
      {
        name:"Gadgets",
        cost:"13.00",
        mrp:"14.00",
        rating:4,
        color:["white","blue","yellow"]
      },
      {
        name:"DIY Home",
        cost:"4.00",
        mrp:"14.00",
        rating:2,
        color:["white","blue","yellow"]
      },
      {
        name:"Make-Up",
        cost:"8.00",
        mrp:"14.00",
        rating:3,
        color:["white","blue","yellow"]
      },
      {
        name:"Cooking",
        cost:"12.00",
        mrp:"14.00",
        rating:4,
        color:["white","blue","yellow"]
      },
      {
        name:"Electronics",
        cost:"7.00",
        mrp:"14.00",
        rating:5,
        color:["white","blue","yellow"]
      }
    ];
    this.interestname=this.interests[0];
    this.sizes=["S","M","L","XL","XXL"];
   }

   selInterest(interest:any) {
     this.interestname=interest;
   }

   checkRating(rating:number,interest:any) {
     //console.log(rating);
     //console.log(interest.rating);
     if(rating<=interest.rating) {
      //console.log("True");
      return true;
     }
     else {
       //console.log("False");
       return false;
     }
   }

  selColor(color:string) {
    this.color_selected=color;
    console.log("Color selected is "+this.color_selected);
  }

  selSize(size:string) {
    this.size_selected=size;
    console.log("Size selected is "+this.size_selected);    
  }

  isSelSize(size:string) {
    if(this.size_selected==size) {
      return true;
    }
    else {
      return false;
    }
  
  }
  ngOnInit(): void {
  }

}
