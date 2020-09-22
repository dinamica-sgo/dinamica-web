import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FeeService } from "src/app/services/fee.service";
import { Fee } from 'src/app/model/Fee';
  
@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.scss']
})
export class LendingComponent implements OnInit {

  fees: Fee[] = [];
  dataSource = new MatTableDataSource<Fee>(this.fees);
  displayedColumns: string[] = ['feeId', 'dueDate', 'quotas', 'currentQuota', 'amount', 'amortization', 'interest'];

  constructor(private feeService: FeeService) { }

  ngOnInit(): void {
    this.getAllFees();
  }

  public getAllFees() {
    let resp = this.feeService.findAll();
    resp.subscribe(report => this.dataSource.data = report as Fee[]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
