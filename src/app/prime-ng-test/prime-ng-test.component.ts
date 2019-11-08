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

  debtors: Debtor[]
  cols: any[];
  loading: boolean;
  inmemoryData: Debtor[];
  virtualDebtor: Debtor[];

  constructor(private debtorsService: DebtorsService) { }

  ngOnInit() {
    this.cols = [
      { field: 'caseNo', header: 'Case No', width: '15%'},
      { field: 'debtor', header: 'Debtor', width: '45%' },
      { field: 'claimCount', header: 'Claim Count', width: '15%' },
      { field: 'claimAmount', header: 'Claim Amount', width: '25%' }
    ];
    this.debtorsService.getDebtors().then(debtors => this.debtors = debtors)
  }

  loadDataOnScroll(event: LazyLoadEvent) {
    this.loading = true;

    //for demo purposes keep loading the same dataset
    //in a real production application, this data should come from server by building the query with LazyLoadEvent options
    setTimeout(() => {
      //last chunk
      if (event.first === 249980)
        this.virtualDebtor = this.loadChunk(event.first, 20);
      else
        this.virtualDebtor = this.loadChunk(event.first, event.rows);

      this.loading = false;
    }, 250);
  }

  loadChunk(index, length): Debtor[] {
    let chunk: Debtor[] = [];
    for (let i = 0; i < length; i++) {
      chunk[i] = {...this.inmemoryData[i], ...{vin: (index + i)}};
    }

    return chunk;
  }

}
