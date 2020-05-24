import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
//import { Socket } from 'ngx-socket-io';

@Injectable()
export class UpgradeService {
  // this will be replaced by actual hash post-build.js
  public currentHash = 437548;
  public upgrade = false;
  private url = `${environment.serverURL}/api/version-check`;
  private uniqueID = null;

  constructor(
    private http: HttpClient,
    //private socket: Socket
  ) {
    this.uniqueID = this.computeUniqueSessionHash();
  }

  /**
   * Checks in every set frequency the version of frontend application
   * @param url
   * @param {number} frequency - in milliseconds, defaults to 30 minutes
   */
  public initVersionCheck(url = this.url, frequency = 1000) {
    // setInterval(() => {
    //   this.checkVersion(url);
    // }, frequency);
    //this.socket.emit('version-check', this.uniqueID)
  }

  private computeUniqueSessionHash() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  /**
   * Will do the call and check if the hash has changed or not
   * @param version
   */
  public checkVersion(version) {
    // timestamp these requests to invalidate caches
    const hash = version.hash;
    const hashChanged = this.hasHashChanged(this.currentHash, hash);

    // If new version, then return upgrade to true;
    if (hashChanged) {
      this.upgrade = true;
      this.currentHash = hash;
      return this.upgrade;
    }
    // store the new hash so we wouldn't trigger versionChange again
    // only necessary in case you did not force refresh

    return false;
  }

  /**
   * Checks if hash has changed.
   * This file has the JS hash, if it is a different one than in the version.json
   * we are dealing with version change
   * @param currentHash
   * @param newHash
   * @returns {boolean}
   */
  private hasHashChanged(currentHash, newHash) {
    if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
      return false;
    }

    return currentHash !== newHash;
  }
}