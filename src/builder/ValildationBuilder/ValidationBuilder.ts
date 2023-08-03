import { CustomValidation } from "../Validations/CustomValidation";
import { ValidationHashMap } from "./types";

export class ValidationBuilder {
    validations: ValidationHashMap = {};
    
    add(name: string,validation: CustomValidation<any>) {
        this.validations[name] = validation
        return this;
    }

    remove(name: string) {
        if(this.validations[name]) {
            delete this.validations[name]
        }
        return this;
    }

    get() {
        return this.validations
    }
}