import { API } from '../_const/const.const';
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
    let content = JSON.stringify({
      senha: _user.password,
      c_senha: _user.c_password
    });
    return this._http.post(`${API}/usuarios/alterar_senha/${_token}`, content, this.setHeaders())
      .toPromise()
      .then(response => {
        return response.json();
      });
  }
  resetPasswordApp(_user: User, _token: String) {
    let content = JSON.stringify({
      senha: _user.password,
      c_senha: _user.c_password
    });
    return this._http.post(`${API}/candidatos/alterar_senha/${_token}`, content, this.setHeaders())
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  private setHeaders() {
    const headers = new Headers({ 'Content-type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    return new RequestOptions({ headers: headers });
  }
}
