import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devextreme-test',
  templateUrl: './devextreme-test.component.html',
  styleUrls: ['./devextreme-test.component.scss']
})
export class DevextremeTestComponent implements OnInit {
  records: any;

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.client.get('assets/debtor-data.json').subscribe(debtors => {
      this.records = debtors;
      this.records.forEach(rec => {
        rec.lead_debtor = Math.random() > 0.5;
      });
    });
  }
}
