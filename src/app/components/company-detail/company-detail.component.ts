import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../../models/store';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
  providers: [CompanyService]
})
export class CompanyDetailComponent implements OnInit {

  company: Company;
  stores: Store[];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    const id = this.route.snapshot.paramMap.get('id');
    this.companyService.getById(id).subscribe(company => this.company = company);
    this.getStores(id)
  }

  getStores(id: String) {
    this.companyService.getStoresById(id).subscribe(res => this.stores = res);
  }

  // get diagnostic() { return JSON.stringify(this.company); }

}


