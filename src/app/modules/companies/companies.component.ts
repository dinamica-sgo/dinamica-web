import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/model/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  
  providers: Company[] = [];
  dataSource = new MatTableDataSource<Company>(this.providers);
  displayedColumns: string[] = ['companyId', 'companyCode', 'firstName'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getAllVendors();
    this.dataSource.paginator = this.paginator;
  }

  public getAllVendors() {
    let resp = this.companyService.findAll();
    resp.subscribe(report => this.dataSource.data = report as Company[]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
