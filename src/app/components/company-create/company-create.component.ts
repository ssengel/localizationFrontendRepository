import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  error: Error;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  createCompany(name: HTMLInputElement, email: HTMLInputElement) {
    const company: any = {
      name: name.value,
      email: email.value
    }

    this.companyService.create(company).subscribe(
      (res) => { this.router.navigate(['/company']); },
      (err) => { this.error = err; }
    )
  }

}
