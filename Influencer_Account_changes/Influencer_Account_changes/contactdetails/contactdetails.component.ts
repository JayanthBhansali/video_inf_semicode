import { AddressModel } from './../../../models/AddressModel';
import { ContactModel } from './../../../models/contactModel';
import { ContactService } from './../../../services/account/contactServices/contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-contactdetails',
   templateUrl: './contactdetails.component.html',
   styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {
   details: any;
   contactList: ContactModel[];
   defaultAddId: string;
   postData: AddressModel;
   contact = new ContactModel();
   editOrAddFlag: string;

   constructor(private contactService: ContactService, private router: Router) {

   }

   ngOnInit(): void {
      this.contact = new ContactModel();
      let i = 0;
      this.contactService.getAddress().subscribe(res => {
         this.details = res["data"];
         console.log(this.details);
         this.contactList = this.details["addresses"]
         console.log(this.contactList.length);
         this.contactList.forEach(contact => {
            if (contact.default_flag === 1) {
               this.defaultAddId = contact.address_id;
               //document.getElementById(contact.address_id).className = "DisablePointerEvents"
            }
         });
      })
   }

   setAsDefault(addressId: string) {
      console.log(addressId)

      this.postData = {
         address_id: addressId,
      }
      this.contactService.setDefaultAddress(this.postData).subscribe((result: any) => {
         console.log("result", result);
         console.log(result["status"]);
         if (result["status"] === "success") {
            console.log(document.getElementById(addressId));
            document.getElementById(addressId).className = "disableClass";
            (document.getElementById(addressId) as HTMLInputElement).disabled = true;

            this.ngOnInit();

            // document.getElementById('btn'+addressId).setAttribute("disabled","disabled");
         }
      });

   }


   enableEditRemove(addressId: string) {
      document.getElementById(addressId).hidden = false;
      this.contactList.forEach(contact => {
         if (contact.address_id !== addressId) {
            document.getElementById(contact.address_id).hidden = true;
         }
      })
      let modal = document.getElementById(addressId)
      modal.style.display = "block";
   }

   onClickedOutside(e: Event, addressId: string) {
      document.getElementById(addressId).hidden = true;
   }


   addNewContact() {
      // document.getElementById("addnew").hidden = false;
      this.editOrAddFlag = "Add";
      let modal = document.getElementById("myModal")
      modal.style.display = "block";
   }
   addContact(contact: ContactModel) {
      console.log(contact);
      this.contactService.addContact(contact).subscribe((result: any) => {
         console.log("result", result);
         if (result["status"] === "success") {
            alert("Contact added successfully");
            this.ngOnInit();
            let modal = document.getElementById("myModal")
            modal.style.display = "none";
         }

      });
   }

   cancel() {
      let modal = document.getElementById("myModal")
      modal.style.display = "none";
      this.ngOnInit();
   }

   edit(address: ContactModel) {
      document.getElementById(address.address_id).hidden = true;
      console.log("Address to be edited : " + address.address_id);
      this.editOrAddFlag = "Edit";
      let modal = document.getElementById("myModal")
      modal.style.display = "block";
      this.contact = address;
      console.log("Address to be edited : " + this.contact);
   }


   updateContact(contact: ContactModel) {
      console.log(contact);
      this.contactService.updateContact(contact).subscribe((result: any) => {
         console.log("result", result);
         if (result["status"] === "success") {
            alert("Contact updated successfully");
            this.ngOnInit();
            let modal = document.getElementById("myModal")
            modal.style.display = "none";
         }

      });
   }
   delete(contact: ContactModel) {
      console.log(contact);
      this.contactService.deleteContact(contact.address_id).subscribe((result: any) => {
         console.log("result", result);
         if (result["status"] === "success") {
            alert("Contact deleted successfully");
            this.ngOnInit();
         }

      });
   }

   closeButton() {
      let modal = document.getElementById("myModal")
      modal.style.display = "none";
   }





}
