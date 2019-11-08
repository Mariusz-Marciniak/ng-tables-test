import { Component, OnInit } from '@angular/core';
import {Debtor} from "../debtor";
import {DebtorsService} from "../debtors.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-prime-ng-test',
  templateUrl: './prime-ng-test.component.html',
  styleUrls: [
    './prime-ng-test.component.scss'
  ]
})
export class PrimeNgTestComponent implements OnInit {

  cols: any[];
  loading: boolean;
  virtualDebtors: Debtor[];
  totalRecords = 1500;
  perPage = 20;

  constructor(private debtorsService: DebtorsService) { }

  ngOnInit() {
    this.cols = [
      { field: 'caseNo', header: 'Case No', width: '15%'},
      { field: 'debtor', header: 'Debtor', width: '45%' },
      { field: 'claimCount', header: 'Claim Count', width: '15%' },
      { field: 'claimAmount', header: 'Claim Amount', width: '25%' }
    ];
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
      if (event.first === this.totalRecords - this.perPage)
        this.loadChunk(event.first, this.perPage);
      else
        this.loadChunk(event.first, event.rows);

      this.loading = false;
    }, 250);
  }

  loadChunk(index, length) {
    this.debtorsService.getDebtorsChunk(index, length).
    then(debtors => this.virtualDebtors = debtors);
  }

}
