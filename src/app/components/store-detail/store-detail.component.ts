import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Store } from '../../models/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  store:Store;
  storeId: String;
  constructor(private storeService: StoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('id');
    this.getStore(this.storeId);

  }

  getStore(id:String){

    this.storeService.getById(id).subscribe(res => this.store = res)
 
  }

  get diagnostic() { return JSON.stringify(this.store); }

}
