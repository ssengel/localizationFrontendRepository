import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications:Notification[];
  storeId: String;
  constructor(private storeService:StoreService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('id');
    this.storeService.getNotificationsByStoreId(this.storeId).subscribe(
      res => {
        this.notifications = res;
      }
    )
  }

  get diagnostic(){ return JSON.stringify(this.notifications)}

}
