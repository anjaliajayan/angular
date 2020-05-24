import { AbstractControl } from '@angular/forms';

export function containsNumberOnly(control: AbstractControl) {
    let value = control.value;
    if( isNaN(value - parseFloat(value)) ){
        return { isNumber: true };
    }
    return null;
}
