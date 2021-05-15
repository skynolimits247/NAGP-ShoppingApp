import { Injectable } from '@angular/core';

/**
 * @class Service
 * @description Loader service
 * A component can have a seperate instance for this service. So thats why we are not providing this service in any module.
 * The component which needs to use this kind of functionality then this service can be provided for that component only.
 */
@Injectable()
export class LoaderServiceService {
  private isShown: boolean = false;

  constructor() {}

  // return current state of loader
  get isLoading() {
    return this.isShown;
  }

  /**
   * @description Set the loading state to true
   */
  show() {
    this.isShown = true;
  }

  /**
   * @description Set the loading state to false
   */
  hide() {
    this.isShown = false;
  }
}
