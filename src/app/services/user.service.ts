import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { } 

  private readonly url = "http://localhost:8080/user/"

  getAll(){
    return this.http.get(this.url);
  }
  getById<User>(id: String){
    return this.http.get(this.url + id);
  }
  updateImageById(id: String, data: any){
    return this.http.put(this.url + id + '/image' , data);
  }
}
