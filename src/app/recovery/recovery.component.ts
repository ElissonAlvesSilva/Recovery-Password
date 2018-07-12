import { User } from './../_model/user.model';
import { RecoveryService } from './../_service/recovery.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],
  providers: [RecoveryService]
})
export class RecoveryComponent implements OnInit {

  private _user: User;
  constructor(private _activatedRoute: ActivatedRoute, private _recoveryService: RecoveryService) { }

  ngOnInit() {
    this._user = new User();
    this._activatedRoute.params.subscribe(param => {
      if (this.parseDate(JWT(param.token).expire_in) > this.parseDate(new Date().toString())) {

      } else {

      }
    })




  }

  resetPassword() {
    this._activatedRoute.params.subscribe(param => {

      if (JWT(param.token).type === 1) {
        this._recoveryService.resetPasswordWeb(this._user, param.token)
          .then(success => {

          })
          .catch(erro => {

          });
      } else if (JWT(param.token).type === 2) {
        this._recoveryService.resetPasswordApp(this._user, param.token)
          .then(success => {

          })
          .catch(erro => {

          });
      }


    });
  }

  private parseDate(_date: String) {
    let date = new Date(this.stringToDate(_date)).toLocaleString('pt-BR', { timeZone: 'America/Manaus' });
    return date;
  }

  private stringToDate(_date) {
    return new Date(_date);
  }


}
