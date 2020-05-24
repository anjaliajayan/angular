/**
 * Global class to be accessed from the whole application.
 * It is initiated after the login and destroyed after logout.
 * 
 * @author Taleb DAHAN
 * @version 1.0
 */
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';

@Serialize({})
@Injectable({
  providedIn: 'root'
})
export class Globals extends Serializable {
  @SerializeProperty({map: 'token'})
  private token: string;
  @SerializeProperty({map: 'refreshToken'})
  private refreshToken: string;
  //@SerializeProperty({map: 'user'})
  //private user: any;
  @SerializeProperty({map: 'usernamePasswordCombinationMatch'})
  private usernamePasswordCombinationMatch: boolean;

  init(_token: string, _refreshToken: string) {
    this.token = _token;
    this.refreshToken = _refreshToken;
    // let tmp = jwt_decode(_token) as any;
    // user = tmp.user;
  }

  getToken() {
    return this.token;
  }

  setToken(_token: string) {
    this.token = _token;
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  setRefreshToken(_refreshToken: string) {
    this.refreshToken = _refreshToken;
  }

  isUsernamePasswordCombinationMatch() {
    return this.usernamePasswordCombinationMatch;
  }

  setUsernamePasswordCombinationMatch(_auth: boolean) {
    this.usernamePasswordCombinationMatch = _auth
  }

  getUser() {
    let tmp = jwt_decode(this.token) as any;
    return tmp.user;
  }

  getUserUsername() {
    return this.getUser().username;
  }

  getUserEmail() {
    return this.getUser().email;
  }

  getUserAgentCode() {
    return this.getUser().agent_code;
  }

  getUserAgent() {
    return this.getUser().agent;
  }

  getUserAdmin() {
    return this.getUser().admin;
  }

  getUserPermissions() {
    return this.getUser().permissions;
  }

  getOrganisationID() {
    return this.getUser().organisation_id;
  }

  getOrganisationCreditLimit() {
    return this.getUser().organisation.credit_limit;
  }
  getOrganisationCurrecyCode() {
    return this.getUser().organisation.currency_id;
  }

  getCurrencyCode() {
    return this.getUser().organisation.currency.code;
  }

  getCurrencyDecimal() {
    return this.getUser().organisation.currency.currency_decimal.decimal;
  }
}