/*
 * Magic, Copyright(c) Thomas Hansen 2019 - 2020, thomas@servergardens.com, all rights reserved.
 * See the enclosed LICENSE file for details.
 */

// Angular core imports.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing components, first "global/common" components.
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { SecurityComponent } from './components/security/security.component';

// Then importing all "entity components" (for editing entities from your backend).
import { ActorEditModalComponent } from './components/actor/modals/actor-edit-modal';
import { AddressEditModalComponent } from './components/address/modals/address-edit-modal';
import { CategoryEditModalComponent } from './components/category/modals/category-edit-modal';
import { CityEditModalComponent } from './components/city/modals/city-edit-modal';
import { CountryEditModalComponent } from './components/country/modals/country-edit-modal';
import { CustomerEditModalComponent } from './components/customer/modals/customer-edit-modal';
import { FilmEditModalComponent } from './components/film/modals/film-edit-modal';
import { Film_actorEditModalComponent } from './components/film_actor/modals/film_actor-edit-modal';
import { Film_categoryEditModalComponent } from './components/film_category/modals/film_category-edit-modal';
import { Film_textEditModalComponent } from './components/film_text/modals/film_text-edit-modal';
import { InventoryEditModalComponent } from './components/inventory/modals/inventory-edit-modal';
import { LanguageEditModalComponent } from './components/language/modals/language-edit-modal';
import { PaymentEditModalComponent } from './components/payment/modals/payment-edit-modal';
import { RentalEditModalComponent } from './components/rental/modals/rental-edit-modal';
import { StaffEditModalComponent } from './components/staff/modals/staff-edit-modal';
import { StoreEditModalComponent } from './components/store/modals/store-edit-modal';
import { ActorComponent } from './components/actor/actor.component';
import { AddressComponent } from './components/address/address.component';
import { CategoryComponent } from './components/category/category.component';
import { CityComponent } from './components/city/city.component';
import { CountryComponent } from './components/country/country.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FilmComponent } from './components/film/film.component';
import { Film_actorComponent } from './components/film_actor/film_actor.component';
import { Film_categoryComponent } from './components/film_category/film_category.component';
import { Film_textComponent } from './components/film_text/film_text.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LanguageComponent } from './components/language/language.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';
import { StaffComponent } from './components/staff/staff.component';
import { StoreComponent } from './components/store/store.component';


// Creating our routes, one route for each entity type.
const routes: Routes = [

  // First common/global routes.
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'security', component: SecurityComponent },

  // Then routes for all entity components.
  { path: 'actor', component: ActorComponent },
  { path: 'address', component: AddressComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'city', component: CityComponent },
  { path: 'country', component: CountryComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'film', component: FilmComponent },
  { path: 'film_actor', component: Film_actorComponent },
  { path: 'film_category', component: Film_categoryComponent },
  { path: 'film_text', component: Film_textComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'store', component: StoreComponent },
];

// Declaring our main module.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
