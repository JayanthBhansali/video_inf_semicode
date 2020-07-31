import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { NavigationclassComponent } from './components/navigationclass/navigationclass.component';
import { ContactdetailsComponent } from './components/contactdetails/contactdetails.component';
import { SavedcardsComponent } from './components/savedcards/savedcards.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { ArtistprefComponent } from './components/artistpref/artistpref.component';

const routes: Routes = [
  {path:'',component:NavigationclassComponent},
  {path:'profile', component:TestComponent},
  {path:'contactdetails',component:ContactdetailsComponent},
  {path:'savedcards',component:SavedcardsComponent},
  {path:'preference',component:PreferenceComponent},
  {path:'artist-preference',component:ArtistprefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
