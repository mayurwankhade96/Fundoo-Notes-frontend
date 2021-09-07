import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService
{

  constructor(private httpService: HttpService) { }

  createLabel(data: any)
  {
    return this.httpService.createLabel(data);
  }
}
