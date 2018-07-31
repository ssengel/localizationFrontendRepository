import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../models/store';


@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

  private readonly url = "http://localhost:8080/store/";

  getAll(){
    return this.http.get<Store[]>(this.url);
  }

  getById(id: String){
    return this.http.get(this.url+id);
  }

  create(store: Store){
    return this.http.post(this.url,store);
  }
  
  update(store: Store){
    return this.http.put(this.url,store);
  }

  delete(id : String){
    return this.http.delete(this.url+ id);
  }
}
