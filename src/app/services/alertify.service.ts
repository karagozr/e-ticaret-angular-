import { Injectable } from '@angular/core';
declare let alertify: any; /*3. parti komponentleri tanıtma */

/*clasın servis olabilmesi için @injectble olmalı */
@Injectable(
  // {
  //   providedIn: 'root'/*glabal bir servis olduğu */
  // }
)
export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertify.success(message)
  }

  error(message: string) {
    alertify.error(message)
  }

  warning(message: string) {
    alertify.warning(message)
  }
}
