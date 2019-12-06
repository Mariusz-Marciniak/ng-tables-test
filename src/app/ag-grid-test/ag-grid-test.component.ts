import { Component, OnInit } from '@angular/core';
import {DebtorsService} from '../debtors.service';
import {Debtor} from '../debtor';

@Component({
  selector: 'app-ag-grid-test',
  templateUrl: './ag-grid-test.component.html',
  styleUrls: ['./ag-grid-test.component.scss']
})
export class AgGridTestComponent implements OnInit {

  cols = [
    { field: 'caseNo', headerName: 'Case No', width: 100, resizable: true},
    { field: 'debtor', headerName: 'Debtor', width: 200, sortable: true, resizable: true },
    { field: 'claimCount', headerName: 'Claim Count', width: 90, sortable: true, resizable: true, cellClass : 'ag-numeric-cell' },
    { field: 'claimAmount', headerName: 'Claim Amount', width: 250, sortable: true, resizable: true, cellClass : 'ag-numeric-cell'},
    { field: 'c1', headerName: 'Claim Info #1', width: 25, resizable: true },
    { field: 'c2', headerName: 'Claim Info #2', width: 25, resizable: true  },
    { field: 'c3', headerName: 'Claim Info #3', width: 25 },
    { field: 'c4', headerName: 'Claim Info #4', width: 25 },
    { field: 'c5', headerName: 'Claim Info #5', width: 25 },
    { field: 'c6', headerName: 'Claim Info #6', width: 25 },
    { field: 'c7', headerName: 'Claim Info #7', width: 25 },
    { field: 'c8', headerName: 'Claim Info #8', width: 25 },
    { field: 'c9', headerName: 'Claim Info #9', width: 25 },
    { field: 'v1', headerName: 'Claim Value #1', width: 25 },
    { field: 'v2', headerName: 'Claim Value #2', width: 25 }
    ];
  virtualDebtors: Debtor[];


  constructor(private debtorsService: DebtorsService) { }

  ngOnInit() {
     this.debtorsService.getDebtors().then(d => this.virtualDebtors = d);
  }

}
