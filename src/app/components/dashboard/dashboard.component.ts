import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
// export class DashboardComponent implements OnInit
// {

//   constructor() { }

//   ngOnInit(): void
//   {
//   }

// }

export class DashboardComponent implements OnDestroy
{
  mobileQuery: MediaQueryList;
  isExpandable: boolean = false;
  searchWord: string = '';

  fillerNav = Array.from({ length: 20 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 20 }, () =>
    "")

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataService: DataService)
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void
  {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  search(data: any)
  {
    console.log(data)
    this.dataService.sendMessage(data);
  }
}
