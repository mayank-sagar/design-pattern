import { CustomValidation } from "./CustomValidation";

class MaxLength<T> extends CustomValidation<T> {
    private max: number
    constructor(max:number, message: string) {
        super(message) 
        this.max = max
    }

    validate(value:T): boolean {
        return value && value.toString().length <= this.max
    }

}

export default MaxLength