import { Component, OnInit } from '@angular/core';
import { CompanyService } from "src/app/services/company.service";
import { Company } from 'src/app/model/Company';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  company: Company;
 
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompany(12);
  }

  public getCompany( id: number) {
    let resp = this.companyService.findById(id);
    resp.subscribe(data => this.company = data as Company);
  }
}
