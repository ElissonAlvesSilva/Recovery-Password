import { API } from './../_const/const.const';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { User } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  constructor(private _http: Http) {

  }

  resetPasswordWeb(_user: User, _token: String) {
    return this._http.post(`${API}/usuarios`, _user, this.setHeaders(_token))
      .toPromise()
      .then(response => {
        return response.json();
      });
  }
  resetPasswordApp(_user: User, _token: String) {
    return this._http.post(`${API}/candidatos`, _user, this.setHeaders(_token))
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  private setHeaders(_token) {
    const headers = new Headers({ 'Content-type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('x-access-token', _token);
    return new RequestOptions({ headers: headers });
  }
}
