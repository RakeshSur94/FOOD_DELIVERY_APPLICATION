import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
path:'offer',
component:OfferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
