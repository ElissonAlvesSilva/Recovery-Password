import { AbstractControl } from "@angular/forms";

export class PasswordMatch {
    fields: IPasswordMatchFields;

    constructor(_fields: IPasswordMatchFields) {
        this.fields = _fields;
    }

    passwordMatches(form: AbstractControl) {
        if (this.fields) {

            if (form.get(this.fields.password).value == form.get(this.fields.c_password).value) {
                form.get(this.fields.c_password).setErrors({ 'passwordNotEqual': false });
                form.get(this.fields.c_password).updateValueAndValidity({ onlySelf: true });
                return false;
            } else {
                form.get(this.fields.c_password).setErrors({ 'passwordNotEqual': true });
                return { passwordNotEqual: true };
            }
        }
    }
}