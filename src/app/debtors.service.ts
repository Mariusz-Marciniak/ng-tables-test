import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Debtor} from "./debtor";

@Injectable({
  providedIn: 'root'
})
export class DebtorsService {

  constructor(private http: HttpClient) { }

  getFrozenDebtors() {
    return this.getDebtorsChunk(30, 5);
  }

  getDebtors() {
    return this.http.get<Debtor[]>('/assets/debtor-data.json').toPromise()
  }

  getDebtorsChunk(offset: number, amount: number) {
    console.log(`fetching ${amount} from ${offset}`)
    return this.http.get<Debtor[]>('/assets/debtor-data.json').toPromise().then(v => v.slice(offset, offset + amount));
  }

}
