import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  
  title = 'Companies';
  companies:Company[];
  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getAll().subscribe(res=>{
      this.companies = res;
    })
  }
}
