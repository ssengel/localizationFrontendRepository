import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Store } from '../models/store';
import { ErrorHandlerService } from './error-handler.service';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  private readonly url = 'http://localhost:8080/company/'

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router) {}

  getAll() {
    return this.http.get<Company[]>(this.url)
    .catch(this.errorHandlerService.handleError);
  }

  getById(id: String) {
    return this.http.get<Company>(this.url + id)
     .catch(this.errorHandlerService.handleError) 
  }

  getStoresById(id: String) {
    return this.http.get<Store[]>(this.url + id + '/store')
      .catch(this.errorHandlerService.handleError)
  }

  create(company: Company) {
    return this.http.post<Company>(this.url, company)
      .catch(this.errorHandlerService.handleError)
  }

}
