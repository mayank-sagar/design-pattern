import { CustomValidation } from "./CustomValidation";

class SpecialChars<T extends string> extends CustomValidation<T> {
    constructor(message: string) {
        super(message) 
    }

    validate(value:T): boolean {
        return value && !/[@#$%^&*()_+=]/.test(value)
    }

}

export default SpecialChars