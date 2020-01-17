/*
 * Magic, Copyright(c) Thomas Hansen 2019 - 2020, thomas@servergardens.com, all rights reserved.
 * See the enclosed LICENSE file for details.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/*
 * Your main HTTP service for invoking CRUD methods in your backend's API.
 *
 * Notice, also contains some "helper methods" such as authenticate, refresh JWT token, etc.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  // Authenticates you towards your backend API.
  authenticate(username: string, password: string) {
    return this.httpClient.get<any>(
      environment.apiUrl +
      'magic/modules/system/auth/authenticate?username=' +
      encodeURI(username) +
      '&password=' +
      encodeURI(password));
  }

  // Will refresh an existing JWT token, if possible.
  refreshTicket() {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/system/auth/refresh-ticket');
  }

  // Will refresh an existing JWT token, if possible.
  changeMyPassword(password: string) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/system/auth/change-password', {
      password,
    });
  }
  
  // Creates QUERY arguments from the specified "args" argument given.
  getQueryArgs(args: any) {
    let result = '';
    for(const idx in args) {
      if (Object.prototype.hasOwnProperty.call(args, idx)) {
        const idxFilter = args[idx];
        if (idxFilter !== null && idxFilter !== undefined && idxFilter !== '') {
          if (result === '') {
            result += '?';
          } else {
            result += '&';
          }
          if (idx.endsWith('.like')) {
            result += idx + '=' + encodeURIComponent(idxFilter + '%');
          } else {
            result += idx + '=' + encodeURIComponent(idxFilter);
          }
        }
      }
    }
    return result;
  }

  // HTTP REST methods your backend exposes, and that was used to scaffold Angular frontend app.


  actorDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/actor' + this.getQueryArgs(args));
  }

  actorGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/actor' + this.getQueryArgs(args));
  }

  actorPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/actor', args);
  }

  actorPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/actor', args);
  }

  actor_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/actor-count' + this.getQueryArgs(args));
  }

  addressDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/address' + this.getQueryArgs(args));
  }

  addressGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/address' + this.getQueryArgs(args));
  }

  addressPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/address', args);
  }

  addressPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/address', args);
  }

  address_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/address-count' + this.getQueryArgs(args));
  }

  categoryDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/category' + this.getQueryArgs(args));
  }

  categoryGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/category' + this.getQueryArgs(args));
  }

  categoryPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/category', args);
  }

  categoryPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/category', args);
  }

  category_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/category-count' + this.getQueryArgs(args));
  }

  cityDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/city' + this.getQueryArgs(args));
  }

  cityGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/city' + this.getQueryArgs(args));
  }

  cityPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/city', args);
  }

  cityPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/city', args);
  }

  city_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/city-count' + this.getQueryArgs(args));
  }

  countryDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/country' + this.getQueryArgs(args));
  }

  countryGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/country' + this.getQueryArgs(args));
  }

  countryPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/country', args);
  }

  countryPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/country', args);
  }

  country_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/country-count' + this.getQueryArgs(args));
  }

  customerDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/customer' + this.getQueryArgs(args));
  }

  customerGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/customer' + this.getQueryArgs(args));
  }

  customerPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/customer', args);
  }

  customerPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/customer', args);
  }

  customer_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/customer-count' + this.getQueryArgs(args));
  }

  filmDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/film' + this.getQueryArgs(args));
  }

  filmGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film' + this.getQueryArgs(args));
  }

  filmPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/film', args);
  }

  filmPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/film', args);
  }

  film_actorDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/film_actor' + this.getQueryArgs(args));
  }

  film_actorGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film_actor' + this.getQueryArgs(args));
  }

  film_actorPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/film_actor', args);
  }

  film_actorPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/film_actor', args);
  }

  film_actor_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film_actor-count' + this.getQueryArgs(args));
  }

  film_categoryDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/film_category' + this.getQueryArgs(args));
  }

  film_categoryGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film_category' + this.getQueryArgs(args));
  }

  film_categoryPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/film_category', args);
  }

  film_categoryPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/film_category', args);
  }

  film_category_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film_category-count' + this.getQueryArgs(args));
  }

  film_textDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/film_text' + this.getQueryArgs(args));
  }

  film_textGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film_text' + this.getQueryArgs(args));
  }

  film_textPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/film_text', args);
  }

  film_textPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/film_text', args);
  }

  film_text_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film_text-count' + this.getQueryArgs(args));
  }

  film_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/film-count' + this.getQueryArgs(args));
  }

  inventoryDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/inventory' + this.getQueryArgs(args));
  }

  inventoryGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/inventory' + this.getQueryArgs(args));
  }

  inventoryPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/inventory', args);
  }

  inventoryPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/inventory', args);
  }

  inventory_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/inventory-count' + this.getQueryArgs(args));
  }

  languageDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/language' + this.getQueryArgs(args));
  }

  languageGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/language' + this.getQueryArgs(args));
  }

  languagePost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/language', args);
  }

  languagePut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/language', args);
  }

  language_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/language-count' + this.getQueryArgs(args));
  }

  paymentDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/payment' + this.getQueryArgs(args));
  }

  paymentGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/payment' + this.getQueryArgs(args));
  }

  paymentPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/payment', args);
  }

  paymentPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/payment', args);
  }

  payment_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/payment-count' + this.getQueryArgs(args));
  }

  rentalDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/rental' + this.getQueryArgs(args));
  }

  rentalGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/rental' + this.getQueryArgs(args));
  }

  rentalPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/rental', args);
  }

  rentalPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/rental', args);
  }

  rental_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/rental-count' + this.getQueryArgs(args));
  }

  staffDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/staff' + this.getQueryArgs(args));
  }

  staffGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/staff' + this.getQueryArgs(args));
  }

  staffPost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/staff', args);
  }

  staffPut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/staff', args);
  }

  staff_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/staff-count' + this.getQueryArgs(args));
  }

  storeDelete(args: any) {
    return this.httpClient.delete<any>(environment.apiUrl + 'magic/modules/sakila/store' + this.getQueryArgs(args));
  }

  storeGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/store' + this.getQueryArgs(args));
  }

  storePost(args: any) {
    return this.httpClient.post<any>(environment.apiUrl + 'magic/modules/sakila/store', args);
  }

  storePut(args: any) {
    return this.httpClient.put<any>(environment.apiUrl + 'magic/modules/sakila/store', args);
  }

  store_countGet(args: any) {
    return this.httpClient.get<any>(environment.apiUrl + 'magic/modules/sakila/store-count' + this.getQueryArgs(args));
  }
}
