import { CustomValidation } from "../Validations/CustomValidation";

export type ValidationHashMap = {[key:string]: ({key: string, value: CustomValidation<any>}[] | null | undefined ) }