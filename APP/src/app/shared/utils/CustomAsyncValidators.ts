
import { FormGroup } from '@angular/forms';


let rules = {};
export function isRequireOrgOrTripId(selectType: string, organisation_id: string, trip_id: string) {
    return (formGroup: FormGroup) => {
        const org = formGroup.controls[organisation_id];
        const select = formGroup.controls[selectType];
        const trip = formGroup.controls[trip_id];

        if (org.errors && !org.errors.orgIdRequire) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        if (select.value == 1) {
            if (!org.value) {
                trip.setErrors(null);
                org.setErrors({ orgIdRequire: true })
            }
        } else if (select.value == 2) {
            if (!trip.value) {
                org.setErrors(null);
                trip.setErrors({ tripIdRequire: true })
            }
        } else {
            org.setErrors(null);
            trip.setErrors(null);
        }
    }
}

export function checkCurrentPassword(oldpass: string, pass: string, con_pass: string) {
    return (FormGroup: FormGroup) => {
        const oldpassword = FormGroup.controls[oldpass];
        const password = FormGroup.controls[pass];
        const confirm_password = FormGroup.controls[con_pass];

        if (oldpassword.errors && !oldpassword.errors.oldPassWrong) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        if (oldpassword.value != '' ) {
            // check password from api
            if (password.value != '' || confirm_password.value  != '') {
                oldpassword.setErrors({ requireOldPass: true })
            }else{
                oldpassword.setErrors({ oldPassWrong: true })
            }
        } else {
            oldpassword.setErrors(null);
        }

    }
}

export function matchPassword(pass: string, con_pass: string) {
    return (FormGroup: FormGroup) => {
        const password = FormGroup.controls[pass];
        const confirm_password = FormGroup.controls[con_pass];

        if (confirm_password.errors && !confirm_password.errors.requireConfirm) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        if (password.value != '' ) {
            confirm_password.setErrors({ requireConfirm: true })
        } else if (confirm_password.value != '' &&  password.value != confirm_password.value) {
            confirm_password.setErrors({ passNotMatch: true })
        }else{
            confirm_password.setErrors(null);
        }

    }
}
