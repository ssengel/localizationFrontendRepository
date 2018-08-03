import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  title: String = "Stores";
  stores: Store[];

  ngOnInit() {
    this.getStores();
  }

  getStores() {
    this.storeService.getAll().subscribe((res:Store[]) =>{
      this.stores = res;
    })
  }

}
