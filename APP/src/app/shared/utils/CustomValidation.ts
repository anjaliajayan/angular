import { AbstractControl } from '@angular/forms';

function matchPassword(password, confPass){
    let control = AbstractControl;
    console.log("---control",control)
    // if (control.value && !control.value.startsWith('data:application/pdf')) {
    //     return {pdf: true};
    //   }
      return null;
}

export const CustomValidators = {
    matchPassword
} 