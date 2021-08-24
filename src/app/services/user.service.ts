import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService
{

  constructor(private httpService: HttpService) { }

  login(data: any)
  {
    return this.httpService.Post("Users/login", data, null, false);
  }

  register(data: any)
  {
    return this.httpService.Post("Users/register", data, null, false);
  }

  forget(data: any)
  {
    return this.httpService.Post("Users/forgetpassword", data, null, false);
  }

  reset(token: any, data: any)
  {
    return this.httpService.Put("Users/resetpassword", data, token, true);
  }
}
