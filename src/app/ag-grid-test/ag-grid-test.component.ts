import { Component, OnInit } from '@angular/core';
import {DebtorsService} from "../debtors.service";
import {Debtor} from "../debtor";

@Component({
  selector: 'app-ag-grid-test',
  templateUrl: './ag-grid-test.component.html',
  styleUrls: ['./ag-grid-test.component.scss']
})
export class AgGridTestComponent implements OnInit {

  cols = [
    { field: 'caseNo', headerName: 'Case No', width: 100},
    { field: 'debtor', headerName: 'Debtor', width: 200, sortable: true },
    { field: 'claimCount', headerName: 'Claim Count', width: 90, sortable: true },
    { field: 'claimAmount', headerName: 'Claim Amount', width: 250, sortable: true }
  ];
  virtualDebtors: Debtor[];


  constructor(private debtorsService: DebtorsService) { }

  ngOnInit() {
     this.debtorsService.getDebtors().then(d => this.virtualDebtors = d);
  }

}
