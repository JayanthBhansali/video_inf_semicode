import { CookieService } from 'ngx-cookie-service';
import { AddressModel } from './../../../models/AddressModel';

import { ContactModel } from './../../../models/contactModel';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { throwError, Observable } from "rxjs";
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../api.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
   
  constructor(private http: HttpClient, private apiService: ApiService, private cookieService:CookieService) { 
 
  }

  getAddress() {
    let header = {
      'jwt-token': this.cookieService.get("token"),
    };
    let tokenheaders = new HttpHeaders(header);
    return this.http.get(environment.baseUrl + environment.getCustomerAddresses, { headers: tokenheaders }).map((data: Response) => {
      console.log(data);
      return data
    },
      error => {
        console.log("error...", error);
      })
      .catch(this.handleError);

  }

  setDefaultAddress(body: AddressModel) {
    let header = {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': "*",
      'jwt-token': this.cookieService.get("token"),
    };


    let tokenheaders = new HttpHeaders(header);
    console.log(environment.baseUrl + environment.setDefaultAddress);
    console.log(body)
    return this.http.post<AddressModel>(environment.baseUrl
      + environment.setDefaultAddress, body, { headers: tokenheaders });

  }

  addContact(body: ContactModel) {
    let header = {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': "*",
      'jwt-token': this.cookieService.get("token"),
    };
    let tokenheaders = new HttpHeaders(header);
    console.log(environment.baseUrl + environment.addAddress);
    console.log(body)
    return this.http.post<ContactModel>(environment.baseUrl
      + environment.addAddress, body, { headers: tokenheaders });

  }
0
  updateContact(body: ContactModel) {
    let header = {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': "*",
      'jwt-token':this.cookieService.get("token"),
    };
    let tokenheaders = new HttpHeaders(header);
    console.log(environment.baseUrl + environment.addAddress);
    console.log(body);
    return this.http.post<ContactModel>(environment.baseUrl
      + environment.updateAddress, body, { headers: tokenheaders });

  }

  deleteContact(addressId : string) {
    let header = {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': "*",
      'jwt-token': this.cookieService.get("token"),
    };
    let tokenheaders = new HttpHeaders(header);
    console.log(environment.baseUrl + environment.deleteAddress);
    console.log(addressId);
    return this.http.delete(environment.baseUrl
      + environment.deleteAddress,{ headers: tokenheaders });

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