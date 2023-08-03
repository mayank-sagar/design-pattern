import { CustomValidation } from "../Validations/CustomValidation";
import { ValidationHashMap } from "./types";

export class ValidationBuilder {
    validations: ValidationHashMap = {};
    
    add(name: string,validationName: string, validation: CustomValidation<any>) {
        if(!this.validations[name]) this.validations[name] = [{key: validationName, value:validation }]
        this.validations[name]?.push({key: validationName, value:validation })
        return this;
    }

    remove(name: string,validationName: string) {
        if(this.validations[name]) {
            this.validations[name] = this.validations[name]?.filter((validator) => validator.key !== validationName)
            if(this.validations[name]?.length === 0) {
                this.validations[name] = null;
            }
        }
        return this;
    }

    get() {
        return this.validations
    }
}