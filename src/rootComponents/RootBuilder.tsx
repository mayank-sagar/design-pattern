import React, { FC, useMemo, useState } from 'react'
import { ValidationBuilder } from '../builder/ValildationBuilder/ValidationBuilder'
import Required from '../builder/Validations/Required'
import Errors from '../components/Builder/Errors';
import MaxLength from '../builder/Validations/MaxLength';
import { CustomValidation } from '../builder/Validations/CustomValidation';
import SpecialChars from '../builder/Validations/SpecialChars';

const RootBuilder:FC<{}> = ({}) => {
const [value,setValue] = useState('')
const [isTouched,setIsTouched] = useState<boolean>(false);    
const validation  = useMemo(() => {
    return new ValidationBuilder()
},[])
const buildValidation = (e: {target: HTMLInputElement}) => {
        let validator: (CustomValidation<any> | null) = null;
        if(e.target.value === 'required') validator = new Required<string>("Field is required") 
        if(e.target.value === 'max') validator = new MaxLength<string>(20,"Field should not be greater then 20 characters")
        if(e.target.value === 'no-special') validator = new SpecialChars<string>("Field should not contain any special characters")
        
        if(validator && e.target.checked) {
            validation.add("name",e.target.value,validator)
        }

        if(validator && !e.target.checked) {
            validation.remove("name",e.target.value)
        }
}
return (<>
<div>
    Required <input type="checkbox" value="required" onChange={buildValidation} /> <br/>
    Max length 20 <input type="checkbox" value="max" onChange={buildValidation} /> <br/>
    No special characters <input type="checkbox" value="no-special" onChange={buildValidation} /> <br/>
    <br/>
    <input onBlur={() => setIsTouched(true)} value={value} onChange={(e) => setValue(e.target.value)}/>
    {
        isTouched ?    
         <Errors 
         value={value} name='name' schema={validation}></Errors>
            : null
    }
</div>
</>)
}

export default RootBuilder;