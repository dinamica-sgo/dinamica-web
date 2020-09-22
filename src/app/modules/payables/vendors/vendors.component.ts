import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/model/Company';
import { CompanyService } from 'src/app/services/company.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  vendors: Company[] = [];
  dataSource = new MatTableDataSource<Company>(this.vendors);
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
