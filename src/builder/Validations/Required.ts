import { CustomValidation } from "./CustomValidation";

class Required<T> extends CustomValidation<T> {

    constructor(message: string) {
        super(message) 
    }

    validate(value:T): boolean {
        return value && value.toString().trim() !== ""
    }

}

export default Required