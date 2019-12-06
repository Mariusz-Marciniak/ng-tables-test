import { Component, OnInit } from '@angular/core';
import {Debtor} from '../debtor';
import {DebtorsService} from '../debtors.service';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-prime-ng-test',
  templateUrl: './prime-ng-test.component.html',
  styleUrls: [
    './prime-ng-test.component.scss'
  ]
})
export class PrimeNgTestComponent implements OnInit {

  cols: any[];
  scrollableCols: any[];
  loading: boolean;
  virtualDebtors: Debtor[];
  totalRecords = 1500;
  perPage = 20;

  constructor(private debtorsService: DebtorsService) { }

  ngOnInit() {
    this.scrollableCols = [
      { field: 'caseNo', header: 'Case No', width: '50px'},
      { field: 'debtor', header: 'Debtor', width: '100px' },
      { field: 'claimCount', header: 'Claim Count', width: '100px' },
      { field: 'claimAmount', header: 'Claim Amount', width: '400px', resizable: true  },
      { field: 'c1', header: 'Claim Info #1', width: '15%', resizable: true },
      { field: 'c2', header: 'Claim Info #2', width: '15%', resizable: true  },
      { field: 'c3', header: 'Claim Info #3', width: '15%' },
      { field: 'c4', header: 'Claim Info #4', width: '15%' },
      { field: 'c5', header: 'Claim Info #5', width: '15%' },
      { field: 'c6', header: 'Claim Info #6', width: '15%' },
      { field: 'c7', header: 'Claim Info #7', width: '15%' },
      { field: 'c8', header: 'Claim Info #8', width: '15%' },
      { field: 'c9', header: 'Claim Info #9', width: '15%' },
      { field: 'v1', header: 'Claim Value #1', width: '15%' },
      { field: 'v2', header: 'Claim Value #2', width: '15%' }
    ];
    this.cols = this.scrollableCols;
    this.initData();
  }

  private initData() {
    this.loading = true;
    this.debtorsService.getDebtorsChunk(0, 40).then(d => this.virtualDebtors = d);
    // this.debtorsService.getDebtors().then(d => this.virtualDebtors = d);
    this.loading = false;
  }

  loadDataOnScroll(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (event.first === this.totalRecords - this.perPage) {
        this.loadChunk(event.first, this.perPage);
      } else {
        this.loadChunk(event.first, event.rows);
      }

      this.loading = false;
    }, 250);
  }

  loadChunk(index, length) {
    this.debtorsService.getDebtorsChunk(index, length).
    then(debtors => this.virtualDebtors = debtors);
  }

}
