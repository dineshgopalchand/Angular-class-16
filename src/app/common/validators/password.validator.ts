import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
    static passwordStrength(control: AbstractControl): ValidationErrors | null {
        // console.log(control);
        const value: string = control.value || '';

        if (!value) {
            return null;
        }
        const error = {
            upperCaseCharacters: true,
            lowerCaseCharacters: true,
            numberCharacters: true,
            specialCharacters: true,
        };
        let errFlag = false;
        const upperCaseCharacters = new RegExp(/[A-Z]+/g);
        const lowerCaseCharacters = new RegExp(/[a-z]+/g);
        const numberCharacters = new RegExp(/[0-9]+/g);
        const specialCharacters = new RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/);
        if (!value.match(upperCaseCharacters)) {
            error.upperCaseCharacters = false;
            errFlag = true;
        }
        if (!value.match(lowerCaseCharacters)) {
            error.lowerCaseCharacters = false;
            errFlag = true;
        }
        if (!value.match(numberCharacters)) {
            error.numberCharacters = false;
            errFlag = true;
        }
        if (!value.match(specialCharacters)) {
            error.specialCharacters = false;
            errFlag = true;
        }

        if (errFlag) {
            return { passwordStrength: error };
        }
        return null;

    }
    static passwordCheck(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
        return (group: FormGroup): ValidationErrors | null => {
            const passwordInput = group.controls[passwordKey];
            const passwordConfirmationInput = group.controls[confirmPasswordKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                passwordConfirmationInput.setErrors({ notEquivalent: true });
                return { passwordCheck: { match: false } };
            }
            passwordConfirmationInput.setErrors(null);
            return null;

        };
    }
}
