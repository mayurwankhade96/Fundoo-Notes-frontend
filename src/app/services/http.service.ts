import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  backendUrl = environment.backendUrl;
  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean)
  {
    return this.http.post(this.backendUrl + url, data);
  }

}

