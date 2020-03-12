import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';

export class UsernameValidator {
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            const value = control.value;
            if (!value) {
                return resolve(null);
            }
            setTimeout(() => {
                // if (value === 'dinesh') {
                //     resolve({ shouldBeUnique: true });
                // } else {
                //     resolve(null);
                // }
                if (value === 'dinesh') {
                    return resolve({ shouldBeUnique: true });
                }
                return resolve(null);
            }, 3000);
    });
}
}

