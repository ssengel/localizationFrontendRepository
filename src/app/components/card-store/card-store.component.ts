import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../models/store';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.css']
})
export class CardStoreComponent implements OnInit {

  @Input() store: Store;

  constructor() { }

  ngOnInit() {
  }

}
