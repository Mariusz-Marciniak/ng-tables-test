import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Debtor} from "./debtor";

@Injectable({
  providedIn: 'root'
})
export class DebtorsService {

  constructor(private http: HttpClient) { }

  getDebtors() {
    return this.http.get<Debtor[]>('/assets/debtor-data.json').toPromise()
  }

}
