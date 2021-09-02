import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService
{

  private sendingSource = new BehaviorSubject([]);
  receivingSource = this.sendingSource.asObservable();

  constructor() { }
}
