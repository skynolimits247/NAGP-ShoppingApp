import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage: Storage | any;

  /**
   * Constructor of the Service.
   * Initilaizing local storage object and checking for its support
   */
  constructor(@Inject(PLATFORM_ID) private platformId) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage = window.localStorage;
    } else if (isPlatformServer(this.platformId)) {
      this.storage = {};
    }

    // this.storage = window.sessionStorage;

    if (!this.isSupported()) {
      throw new Error('localStorage is not supported by browser!');
    }
  }

  /**
   * method to save in local storage
   * @param key
   * @param value
   */
  setItem<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  /**
   * method to retrive from local storage
   * @param key
   * @return {T} value
   */
  getItem<T>(key: string): T {
    return JSON.parse(this.storage.getItem(key));
  }

  /**
   * method to delete item from local storage
   * @param key
   */
  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  /**
   * method to clear the local storage
   */
  clear(): void {
    this.storage.clear();
  }

  /**
   * method to check either local storage is supported by the browser or not
   * @return {boolean} True if browser supports 'Storage API' otherwise false
   */
  private isSupported(): boolean {
    let supported = true;

    if (!this.storage) {
      supported = false;
    }

    return supported;
  }
}
