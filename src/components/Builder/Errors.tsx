import { FC, useMemo } from "react";
import { ValidationBuilder } from "../../builder/ValildationBuilder/ValidationBuilder";

const Errors: FC<{ name: string, value: string, schema: ValidationBuilder}> = ({ name, value, schema}) => {
     const errorText = useMemo(() => {
        const validations = schema.get()
        const rule = validations[name]?.find((validator) => !validator.value.validate(value))
        return rule ? rule.value.getMessage() : ""
    },[value])
    return (<div>{errorText}</div>)
}

export default Errors;