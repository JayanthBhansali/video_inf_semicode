import { Router } from '@angular/router';
import { CardService } from './../../../services/account/cardServices/card.service';
import { CardDetailsModel } from './../../../models/CardDetailsModal';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-savedcards',
  templateUrl: './savedcards.component.html',
  styleUrls: ['./savedcards.component.css']
})
export class SavedcardsComponent implements OnInit {
  carddetails: any;
  result : any;
  cardsList : CardDetailsModel[];
  defaultCardId : string;
  constructor(private cardService: CardService, private router: Router) {
  
  }

  ngOnInit(): void {

    this.cardService.getSavedCards().subscribe(res => {
      this.result = res["data"];
      console.log(this.result);
      this.cardsList = this.result["cards"]
      console.log(this.cardsList.length);
      this.cardsList.forEach(card => {
        if (card.default_flag === 1) {
           this.defaultCardId = card.card_id;
         }
     });
   })

  }


  setAsDefault(card : CardDetailsModel) {
    console.log("The card ID to be set as default " + card.card_id);
    this.cardService.setAsDefaultCard(card).subscribe(result => {
      console.log("result", result);
      console.log(result["status"]);
      if (result["status"] === "success") {
         this.ngOnInit();
     }
   });
  }
}
