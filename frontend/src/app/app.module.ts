/*
 * Magic, Copyright(c) Thomas Hansen 2019 - 2020, thomas@servergardens.com, all rights reserved.
 * See the enclosed LICENSE file for details.
 */

 // Common imports from Angular ++.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material imports.
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Importing "oauth0" to help out with our JWT tokens.
import { JwtModule } from '@auth0/angular-jwt';

// Routing, services, etc imports.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderService } from './services/loader-service';
import { LoaderInterceptor } from './services/loader-interceptor';
import { environment } from 'src/environments/environment';

// All components. First all "global" components.
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreateRoleDialogComponent } from './components/auth/modals/create-role-dialog';
import { CreateUserDialogComponent } from './components/auth/modals/create-user-dialog';
import { EditUserDialogComponent } from './components/auth/modals/edit-user-dialog';
import { SecurityComponent } from './components/security/security.component';

// HTTP REST backend entity components.
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


// Helper to retrieve JWT token. Needed for "oauth0".
export function tokenGetter() {
  return localStorage.getItem('jwt_token');
}

// Your main Angular module.
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    CreateRoleDialogComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    SecurityComponent,
    ActorEditModalComponent,
    AddressEditModalComponent,
    CategoryEditModalComponent,
    CityEditModalComponent,
    CountryEditModalComponent,
    CustomerEditModalComponent,
    FilmEditModalComponent,
    Film_actorEditModalComponent,
    Film_categoryEditModalComponent,
    Film_textEditModalComponent,
    InventoryEditModalComponent,
    LanguageEditModalComponent,
    PaymentEditModalComponent,
    RentalEditModalComponent,
    StaffEditModalComponent,
    StoreEditModalComponent,
    ActorComponent,
    AddressComponent,
    CategoryComponent,
    CityComponent,
    CountryComponent,
    CustomerComponent,
    FilmComponent,
    Film_actorComponent,
    Film_categoryComponent,
    Film_textComponent,
    InventoryComponent,
    LanguageComponent,
    PaymentComponent,
    RentalComponent,
    StaffComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [environment.apiDomain],
      }
    }),
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    LoaderService, {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateRoleDialogComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ActorEditModalComponent,
    AddressEditModalComponent,
    CategoryEditModalComponent,
    CityEditModalComponent,
    CountryEditModalComponent,
    CustomerEditModalComponent,
    FilmEditModalComponent,
    Film_actorEditModalComponent,
    Film_categoryEditModalComponent,
    Film_textEditModalComponent,
    InventoryEditModalComponent,
    LanguageEditModalComponent,
    PaymentEditModalComponent,
    RentalEditModalComponent,
    StaffEditModalComponent,
    StoreEditModalComponent,
  ]
})
export class AppModule { }
