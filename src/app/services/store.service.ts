
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../models/store';
import { ErrorHandlerService } from './error-handler.service';


@Injectable()
export class StoreService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  private readonly url = "http://localhost:8080/store/";

  getAll() {
    return this.http.get<Store[]>(this.url).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  getById(id: String) {
    return this.http.get<Store>(this.url + id).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  create(store: Store) {
    return this.http.post(this.url, store).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  update(id: String, store: Store) {
    return this.http.put(this.url + id, store).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  delete(id: String) {
    return this.http.delete(this.url + id).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  getNotificationsByStoreId(sId: String) {
    return this.http.get<Notification[]>(this.url + sId + '/notification').pipe(
      catchError(this.errorHandlerService.handleError))
  }
}
