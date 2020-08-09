import { CookieService } from 'ngx-cookie-service';
import { LoginModel } from './../../../models/loginModel';
import { CardDetailsModel } from './../../../models/CardDetailsModal';

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { throwError, Observable } from "rxjs";
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../api.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";



@Injectable({
    providedIn: 'root'
  })
  export class CardService {
  
    constructor(private http: HttpClient, private apiService: ApiService, private cookieService: CookieService) { }

    getSavedCards() {
        let header = {
          'jwt-token': this.cookieService.get("token"),
        };
        let tokenheaders = new HttpHeaders(header);
        return this.http.get(environment.baseUrl + environment.getCards, { headers: tokenheaders }).map((data: Response) => {
          console.log(data);
          return data
        },
          error => {
            console.log("error...", error);
          })
          .catch(this.handleError);
    
      }

      setAsDefaultCard(card: CardDetailsModel) {
        let header = {
          "Content-type": "application/json",
          'Access-Control-Allow-Origin': "*",
          'jwt-token': this.cookieService.get("token")
        };
        let body = {
          "card_id" : card.card_id
        }
        let tokenheaders = new HttpHeaders(header);
        console.log(environment.baseUrl + environment.setDefaultAddress);
        console.log(body)
        return this.http.post<LoginModel>(environment.baseUrl
          + environment.setDefaultCard, body, { headers: tokenheaders });
    
      }
      
  // Error handling method
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
      console.log("An error occurred:", error.error.message)
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      )
    }
    return throwError(error);
    // throwError("Something bad happened; please try again later.");
  }
  }