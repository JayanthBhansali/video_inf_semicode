import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { NavigationclassComponent } from './components/navigationclass/navigationclass.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { ContactdetailsComponent } from './components/contactdetails/contactdetails.component';
import { SavedcardsComponent } from './components/savedcards/savedcards.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { ArtistprefComponent } from './components/artistpref/artistpref.component';

@NgModule({
  declarations: [ 
    AppComponent,
    TestComponent,
    NavigationclassComponent,
    MyaccountComponent,
    ContactdetailsComponent,
    SavedcardsComponent,
    PreferenceComponent,
    ArtistprefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
