import { AbstractControl } from '@angular/forms';
import {StoreService} from "../services/store.service";

export class ValidationService {

  static dateValidator(control: AbstractControl) {
    if (!control.value) return;
    else {
      if (control.value.match(/^\d{4}[-]\d{2}[-]\d{2}$/)) {
        return null;
      } else {
        return { 'invalidDate': true };
      }
    }
  }

}
