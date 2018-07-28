import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Company } from '../models/company';
import { Store } from '../models/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  private readonly url = 'http://localhost:8080/company/'


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Company[]>(this.url);
  }

  getById(id: String) {
    return this.http.get<Company>(this.url + id);
  }

  getStoresById(id: String) {
    return this.http.get<Store[]>(this.url + id + '/store');
  }

}
