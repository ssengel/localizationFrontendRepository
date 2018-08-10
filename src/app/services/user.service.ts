
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ErrorHandlerService } from './error-handler.service';
@Injectable()
export class UserService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  private readonly url = "http://localhost:8080/user/"

  getAll() {
    return this.http.get(this.url).pipe(
      catchError(this.errorHandlerService.handleError));
  }
  getById(id: String) {
    return this.http.get(this.url + id).pipe(
      catchError(this.errorHandlerService.handleError));
  }
  updateImageById(id: String, data: any) {
    return this.http.put(this.url + id + '/image', data).pipe(
      catchError(this.errorHandlerService.handleError));
  }
}
