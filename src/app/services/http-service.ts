/*
 * Automatically generated by Magic
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICrudEntity, ICrdEntity, ICrEntity, IREntity, IRudEntity, IRuEntity, ICruEntity, IRdEntity } from './interfaces/crud-interfaces'
import { ILog } from './interfaces/log-interface'
import { StatusResponse } from './models/status-response';
import { CreateResponse } from './models/create-response';
import { CountResponse } from './models/count-response';
import { UpdateResponse } from './models/update-response';
import { DeleteResponse } from './models/delete-response';

/**
 * Your main HTTP service for invoking CRUD methods in your backend.
 * 
 * This class encapsulates the generated HTTP endpoints for your app.
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /**
   * Creates an instance of your service.
   * 
   * @param httpClient What HTTP client to use for invocations towards your backend
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Returns the log instance, allowing you to create server-side
   * log entries.
   */
  get log() : ILog {

    return {

      debug: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/modules/system/logging/log', {
            type: 'debug',
            content
        }).subscribe((res: StatusResponse) => {
          console.log('Info item successfully logged');
        }, (error: any) => {
          console.error(error.error.message);
        });
      },

      info: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/modules/system/logging/log', {
            type: 'info',
            content
        }).subscribe((res: StatusResponse) => {
          console.log('Info item successfully logged');
        }, (error: any) => {
          console.error(error.error.message);
        });
      },

      error: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/modules/system/logging/log', {
            type: 'error',
            content
        }).subscribe((res: StatusResponse) => {
          console.log('Info item successfully logged');
        }, (error: any) => {
          console.error(error.error.message);
        });
      },

      fatal: (content: string) => {
        this.httpClient.post<StatusResponse>(
          environment.apiUrl +
          'magic/modules/system/logging/log', {
            type: 'fatal',
            content
        }).subscribe((res: StatusResponse) => {
          console.log('Info item successfully logged');
        }, (error: any) => {
          console.error(error.error.message);
        });
      }
    }
  }

  /*
   * HTTP REST methods your backend exposes.
   * 
   * These parts is exposed such that each table returns an ICrudEntity
   * or an ICrdEntity, depending upon whether or not the endpoint group
   * contains an update method or not.
   */

  /**
   * HTTP CRUD service methods for your 'actor' entities.
   */
  get actor() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/actor' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/actor' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/actor-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/actor',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/actor',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'address' entities.
   */
  get address() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/address' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/address' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/address-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/address',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/address',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'category' entities.
   */
  get category() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/category' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/category' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/category-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/category',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/category',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'city' entities.
   */
  get city() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/city' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/city' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/city-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/city',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/city',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'country' entities.
   */
  get country() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/country' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/country' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/country-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/country',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/country',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'customer' entities.
   */
  get customer() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/customer' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/customer' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/customer-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/customer',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/customer',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'film_actor' entities.
   */
  get film_actor() : ICrdEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film_actor' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/film_actor' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film_actor-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film_actor',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'film_category' entities.
   */
  get film_category() : ICrdEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film_category' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/film_category' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film_category-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film_category',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'film' entities.
   */
  get film() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/film' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/film',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'inventory' entities.
   */
  get inventory() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/inventory' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/inventory' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/inventory-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/inventory',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/inventory',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'language' entities.
   */
  get language() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/language' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/language' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/language-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/language',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/language',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'payment' entities.
   */
  get payment() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/payment' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/payment' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/payment-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/payment',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/payment',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'rental' entities.
   */
  get rental() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/rental' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/rental' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/rental-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/rental',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/rental',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'staff' entities.
   */
  get staff() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/staff' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/staff' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/staff-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/staff',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/staff',
          args);
      }
    }
  }

  /**
   * HTTP CRUD service methods for your 'store' entities.
   */
  get store() : ICrudEntity {

    return {

      delete: (filter: any) => {
        return this.httpClient.delete<DeleteResponse>(
          environment.apiUrl +
          'magic/modules/sakila/store' +
          this.getQueryArgs(filter));
      },

      read: (filter: any) => {
        return this.httpClient.get<any[]>(
          environment.apiUrl +
          'magic/modules/sakila/store' +
          this.getQueryArgs(filter));
      },

      count: (filter: any) => {
        return this.httpClient.get<CountResponse>(
          environment.apiUrl +
          'magic/modules/sakila/store-count' +
          this.getQueryArgs(filter));
      },

      create: (args: any) => {
        return this.httpClient.post<CreateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/store',
          args);
      },

      update: (args: any) => {
        return this.httpClient.put<UpdateResponse>(
          environment.apiUrl +
          'magic/modules/sakila/store',
          args);
      }
    }
  }


  /*
   * Creates QUERY parameters from the specified "args" argument given.
   *
   * Used by CRUD service methods to create the correct QUERY parameters
   * during invocations towards your backend.
   */
  private getQueryArgs(args: any) {
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
}